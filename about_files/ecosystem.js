const ecosystemTagsCheckboxes = document.querySelectorAll('#ecosystem-tags .tags-wrap input');
const ecosystemTagsCards = document.querySelectorAll('#ecosystem-tags .tags-cards-wrap .tags-card');
const ecosystemTagAll = document.getElementById('ecosystem-tag-all');
const ecosystemTagsWithoutAllCheckbox = Array.prototype.slice.call(ecosystemTagsCheckboxes).filter(checkbox =>
    checkbox.id !== 'ecosystem-tag-all'
)

const handleEcosystemTagCheck = (activeCheckbox) => {
    if (activeCheckbox.id === 'ecosystem-tag-all') {
        ecosystemTagsCheckboxes.forEach(checkbox => {
            if (activeCheckbox.checked) {
                checkbox.checked = true;

                ecosystemTagsCards.forEach(card => {
                    card.classList.remove('display-none');
                })
            } else {
                checkbox.checked = false;

                ecosystemTagsCards.forEach(card => {
                    card.classList.add('display-none');
                })
            }
        })
    } else {
        ecosystemTagsCards.forEach(card => {
            const cardTag = card.getAttribute('data-ecosystem-tag');

            if (ecosystemTagsWithoutAllCheckbox.some(checkbox => checkbox.checked === false)) {
                ecosystemTagAll.checked = false;
            } else {
                ecosystemTagAll.checked = true;
            }

            if (activeCheckbox.checked) {
                if (cardTag === activeCheckbox.id) {
                    card.classList.remove('display-none');
                }
            } else {
                if (cardTag === activeCheckbox.id) {
                    card.classList.add('display-none');
                }

                ecosystemTagAll.checked = false;
            }
        })
    }
}
