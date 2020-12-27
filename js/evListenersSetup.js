(function ()
{
    const setup = document.querySelector('.setup');
    const setupOpenElem = document.querySelector('.setup-open');
    const setupHideElem = document.querySelector('.setup-close');
    const charactersBlock = document.querySelector('.setup-similar');
    const usernameInput = document.querySelector('.setup-user-name');

    charactersBlock.classList.remove('hidden');

    function showBlock() {
        setup.classList.remove('hidden');
        document.addEventListener('keydown', hideBlockByEscape);
        setupHideElem.addEventListener('focus', () => {
            setupHideElem.addEventListener('keydown', hideBlockByEnter);
        });
    }

    function hideBlock() {
        setup.classList.add('hidden');
        document.removeEventListener('keydown', hideBlockByEscape);
        setup.style.left = defaultStatus;
        setup.style.top = defaultStatus;
    }

    function hideBlockByEnter(ev) {
        if (ev.which === 13) {
            hideBlock();
        }
    }

    function hideBlockByEscape(ev) {
        if (ev.which === 27) {
            hideBlock();
        }
    }

    setupOpenElem.addEventListener('click', showBlock);
    setupHideElem.addEventListener('click', hideBlock);
    setupOpenElem.addEventListener('keydown', (ev) => {
        if (ev.code === 'Enter') {
            showBlock();
        }
    });
    usernameInput.addEventListener('focus', () => {
        document.removeEventListener('keydown', hideBlockByEscape);
    });
    usernameInput.addEventListener('blur', () => {
        document.addEventListener('keydown', hideBlockByEscape);
    });
})();
