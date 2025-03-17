        // Set the start date (change this if needed)
        const startDate = new Date("2025-03-18"); // Replace with the actual start date
        const today = new Date();
        
        // Calculate the difference in days
        const timeDiff = today - startDate;
        const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        // Opacity values per day
        const opacityLevels = [0.5, 0.35, 0.2, 0.05, 0]; // Opacity levels for 5 days

        // Apply opacity (if daysPassed is more than the last index, set to 0)
        const opacity = daysPassed < opacityLevels.length ? opacityLevels[daysPassed] : 0;
        document.body.style.opacity = opacity;
