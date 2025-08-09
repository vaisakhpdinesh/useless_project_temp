document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const modal = document.getElementById('addPlantModal');
    const btn = document.getElementById('addPlantBtn');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('plantForm');

    // Open modal when button is clicked
    if (btn && modal) {
        btn.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    }

    // Close modal when X is clicked
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Handle form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const plantNameInput = document.getElementById('plantName');
            const plantTypeSelect = document.getElementById('plantType');
            
            if (plantNameInput && plantTypeSelect) {
                const plantName = plantNameInput.value.trim();
                const plantType = plantTypeSelect.value;
                
                if (plantName && plantType) {
                    // Show success message
                    alert('New plant added!\nName: ' + plantName + '\nType: ' + plantType);
                    
                    // Reset form and close modal
                    form.reset();
                    if (modal) modal.style.display = 'none';
                    
                    // Update the UI with the new plant
                    addPlantToUI(plantName, plantType);
                } else {
                    alert('Please fill in all fields');
                }
            }
        });
    }
});

// Function to add plant to UI
function addPlantToUI(name, type) {
    try {
        // Create a new plant item element
        const plantItem = document.createElement('div');
        plantItem.className = 'plant-item';
        plantItem.textContent = name + ' (' + type + ')';
        
        // Find the first plant section to append to
        const firstSection = document.querySelector('.plant-section');
        if (firstSection) {
            firstSection.appendChild(plantItem);
        }
    } catch (error) {
        console.error('Error adding plant to UI:', error);
    }
}