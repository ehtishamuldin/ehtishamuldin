 document.addEventListener("DOMContentLoaded", function () {
            // Set the start date (change this if needed)
            const startDate = new Date("2025-03-18"); // Adjust to when you want it to start
            const today = new Date();

            // Reset hours to avoid time-based miscalculations
            startDate.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);

            // Calculate how many days have passed
            const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

            // Opacity values for each day
            const opacityLevels = [0.5, 0.35, 0.2, 0.05, 0];

            // Get correct opacity (if days exceed list, stay at 0)
            let opacity = opacityLevels[Math.min(daysPassed, opacityLevels.length - 1)];

            // Apply opacity directly to <body>
            document.body.style.opacity = opacity;
        });
