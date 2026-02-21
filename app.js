// ── Render Projects ──
function renderProjects() {
    const container = document.getElementById("projects-grid");

    if (!projects || projects.length === 0) {
        container.innerHTML = '<p style="color:#999; font-size:0.95rem;">No projects yet. Add them in projects.js!</p>';
        return;
    }

    container.innerHTML = projects
        .map((p, i) => {
            const delay = `${i * 0.08}s`;

            // If image is provided and not empty, show it; otherwise show grey placeholder
            const thumbHTML = p.image
                ? `<img class="project-thumb" src="${p.image}" alt="${p.title}" loading="lazy" />`
                : `<div class="project-placeholder">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
               <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
               <circle cx="8.5" cy="8.5" r="1.5"/>
               <polyline points="21 15 16 10 5 21"/>
             </svg>
           </div>`;

            // Tags
            const tagsHTML =
                p.tags && p.tags.length > 0
                    ? `<div class="project-tags">${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}</div>`
                    : "";

            return `
      <a class="project-card" href="${p.github}" target="_blank" rel="noopener" style="--delay:${delay}">
        <div class="project-thumb-wrap">
          ${thumbHTML}
        </div>
        <div class="project-info">
          <div class="project-meta">
            <span class="project-title">${p.title}</span>
            ${tagsHTML}
          </div>
          <div class="project-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </div>
        </div>
      </a>`;
        })
        .join("");
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
    renderProjects();

    // Start gradient
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
});
