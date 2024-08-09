async function decrypt(cipher, key) {
    const decoded = Uint8Array.from(atob(cipher), c => c.charCodeAt(0));
    const ciphertext = decoded.slice(16);
    const iv = decoded.slice(0, 16);

    const cryptoKey = await crypto.subtle.importKey(
        'raw',
        Uint8Array.from((key.repeat(Math.ceil(32 / key.length))).substring(0, 32), c => c.charCodeAt(0)),
        { name: 'AES-CBC' },
        false,
        ['decrypt']
    );

    const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-CBC', iv: iv },
        cryptoKey,
        ciphertext
    );

    return new TextDecoder().decode(decrypted);
}

(() => {
    document.querySelectorAll('p.secret').forEach((p) => {
        const cipher = p.innerText

        const blurRadius = 3;
        const decoy = document.createElement('div')
        decoy.innerHTML = `<div class="alert alert-success" data-bs-theme="dark">
        <form action="#" class="row">
        <div class="col-md-6">This part is encrypted.</div>
        <div class="col-md-6 row px-0">
            <div class="input-group px-0">
                <input type="text" class="form-control" placeholder="Flag or key">
                <button class="btn btn-outline-success">Decrypt</button>
            </div>
        </div>
        </form>
        </div>`

        p.innerText = ''
        p.appendChild(decoy)

        decoy.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault()
            e.stopPropagation()
            decrypt(cipher, decoy.querySelector('input').value).then((d) => {
                p.innerHTML = d
            }).catch((e) => {
                alert('Could not decrypt.')
                console.error(e);
            })
        }, true);
    })
})()