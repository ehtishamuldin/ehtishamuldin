         document.addEventListener("DOMContentLoaded", function () {
            const startDate = new Date("2025-03-18");
            const today = new Date();
            startDate.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);
            const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
            const opacityLevels = [0.5, 0.35, 0.2, 0.05, 0];
            let opacity = opacityLevels[Math.min(daysPassed, opacityLevels.length - 1)];
            document.body.style.opacity = opacity;
        });
