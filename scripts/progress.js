const lessons = [
  {
    id: "lesson-1",
    order: 1,
    title: "Урок 1. Основа рынка",
    href: "docs/lessons/01-market-basics.html",
  },
  {
    id: "lesson-2",
    order: 2,
    title: "Урок 2. Что такое option",
    href: "docs/lessons/02-what-is-an-option.html",
  },
];

const storageKey = "deltaPathProgress";
const rootPath = window.location.pathname.includes("/docs/") ? "../" : "";
const nestedRootPath = window.location.pathname.includes("/docs/lessons/") ||
  window.location.pathname.includes("/docs/paths/") ||
  window.location.pathname.includes("/docs/concepts/") ||
  window.location.pathname.includes("/docs/practice/")
  ? "../../"
  : rootPath;

function readProgress() {
  try {
    return JSON.parse(window.localStorage.getItem(storageKey)) || { completed: {} };
  } catch {
    return { completed: {} };
  }
}

function writeProgress(progress) {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch {
    // Progress is a convenience feature; the course should still work if storage is blocked.
  }
}

function lessonHref(lesson) {
  return `${nestedRootPath}${lesson.href}`;
}

function currentLesson() {
  const id = document.body.dataset.lessonId;
  return lessons.find((lesson) => lesson.id === id);
}

function updateCurrentPage(progress) {
  const lesson = currentLesson();

  if (!lesson) return progress;

  progress.lastLessonId = lesson.id;
  progress.lastVisitedAt = new Date().toISOString();
  writeProgress(progress);
  return progress;
}

function nextLesson(progress) {
  const lastLesson = lessons.find((lesson) => lesson.id === progress.lastLessonId);
  const firstOpen = lessons.find((lesson) => !progress.completed?.[lesson.id]);

  if (lastLesson && !progress.completed?.[lastLesson.id]) {
    return lastLesson;
  }

  if (lastLesson && progress.completed?.[lastLesson.id]) {
    const nextOpen = lessons.find((lesson) => lesson.order > lastLesson.order && !progress.completed?.[lesson.id]);
    if (nextOpen) return nextOpen;
  }

  return firstOpen || lastLesson || lessons[0];
}

function renderProgress(progress) {
  const sidebar = document.querySelector(".doc-sidebar nav");
  if (!sidebar) return;

  const done = lessons.filter((lesson) => progress.completed?.[lesson.id]).length;
  const target = nextLesson(progress);
  const section = document.createElement("section");
  section.className = "doc-nav-section progress-section";
  section.innerHTML = `
    <h2>Прогресс</h2>
    <a class="continue-link" href="${lessonHref(target)}">Продолжить: ${target.title}</a>
    <div class="progress-meter" aria-label="Прогресс курса">
      <span style="width: ${(done / lessons.length) * 100}%"></span>
    </div>
    <p>${done} из ${lessons.length} уроков завершено</p>
  `;
  sidebar.prepend(section);

  const lessonLinks = [...document.querySelectorAll(".doc-nav-section a")];
  lessonLinks.forEach((link) => {
    const lesson = lessons.find((item) => link.href.endsWith(item.href));
    if (lesson && progress.completed?.[lesson.id]) {
      link.dataset.done = "true";
    }
  });
}

function markCurrentLessonComplete() {
  const lesson = currentLesson();
  if (!lesson) return;

  const progress = readProgress();
  progress.completed = progress.completed || {};
  progress.completed[lesson.id] = true;
  progress.lastLessonId = lesson.id;
  writeProgress(progress);

  document.querySelector(".progress-section")?.remove();
  renderProgress(progress);
}

let progress = readProgress();
progress = updateCurrentPage(progress);
renderProgress(progress);

document.addEventListener("delta-path:quiz-perfect", markCurrentLessonComplete);
