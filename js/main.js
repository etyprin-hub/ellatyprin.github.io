// Animate skill bars when they scroll into view
document.addEventListener('DOMContentLoaded', () => {
const fills = document.querySelectorAll('.skill-fill');

if ('IntersectionObserver' in window) {
const observer = new IntersectionObserver((entries, obs) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const el = entry.target;
const pct = el.getAttribute('data-percent') || '75';
el.style.width = pct + '%';
obs.unobserve(el); // animate once
}
});
}, { threshold: 0.25 });

fills.forEach(f => observer.observe(f));
} else {
// Fallback: animate all immediately if IntersectionObserver not supported
fills.forEach(f => {
const pct = f.getAttribute('data-percent') || '75';
f.style.width = pct + '%';
});
}

// Optional: small accessible focus trap for modals (Bootstrap handles focus, but keep if you add custom modals)
document.querySelectorAll('[data-bs-toggle="modal"]').forEach(btn => {
btn.addEventListener('click', () => {
// close any open popovers/tooltips if you later add them
if (window.bootstrap && bootstrap.Tooltip) {
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(t => {
const instance = bootstrap.Tooltip.getInstance(t);
if (instance) instance.hide();
});
}
});
});
});
