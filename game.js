document.addEventListener('DOMContentLoaded', function() {
    // Game state
    const gameState = {
        growth: 0,
        waterCount: 0,
        currentMode: 'pooky',
        growing: false,
        growthInterval: null
    };

    // DOM elements
    const plant = document.getElementById('plant');
    const progressBar = document.getElementById('progressBar');
    const growthPercentage = document.getElementById('growthPercentage');
    const waterCount = document.getElementById('waterCount');
    const currentMode = document.getElementById('currentMode');
    const waterBtn = document.getElementById('waterBtn');
    const pookyModeBtn = document.getElementById('pookyMode');
    const sigmaModeBtn = document.getElementById('sigmaMode');

    // Start automatic growth
    startGrowth();

    // Water button click handler
    waterBtn.addEventListener('click', function() {
        gameState.waterCount++;
        waterCount.textContent = gameState.waterCount;
        
        if (gameState.currentMode === 'pooky') {
            // In pooky mode, watering boosts growth
            gameState.growth += 5;
            updatePlant();
        }
        // In sigma mode, watering does nothing
    });

    // Mode selection handlers
    pookyModeBtn.addEventListener('click', function() {
        gameState.currentMode = 'pooky';
        currentMode.textContent = 'Pooky';
        pookyModeBtn.classList.add('active');
        sigmaModeBtn.classList.remove('active');
    });

    sigmaModeBtn.addEventListener('click', function() {
        gameState.currentMode = 'sigma';
        currentMode.textContent = 'Sigma';
        sigmaModeBtn.classList.add('active');
        pookyModeBtn.classList.remove('active');
    });

    // Plant growth functions
    function startGrowth() {
        if (gameState.growthInterval) {
            clearInterval(gameState.growthInterval);
        }
        
        gameState.growthInterval = setInterval(function() {
            gameState.growth += 1;
            if (gameState.growth > 100) gameState.growth = 100;
            updatePlant();
        }, 1000);
    }

    function updatePlant() {
        // Update progress bar
        progressBar.style.width = gameState.growth + '%';
        growthPercentage.textContent = gameState.growth;
        
        // Update plant emoji based on growth
        if (gameState.growth < 30) {
            plant.textContent = '🌱';
        } else if (gameState.growth < 70) {
            plant.textContent = '🌿';
        } else {
            plant.textContent = '🌳';
        }
        
        // Check if plant is fully grown
        if (gameState.growth >= 100) {
            clearInterval(gameState.growthInterval);
        }
    }
});