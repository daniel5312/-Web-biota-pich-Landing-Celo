function copyText(u) {
    navigator.clipboard && navigator.clipboard.writeText(u.replace(/\?/g, '%3F'));
    alert('Copied contact link to clipboard')
}
function submitForm() {
    const n = document.getElementById('name').value.trim();
    const e = document.getElementById('email').value.trim();
    const msg = document.getElementById('msg');
    if (!n || !e) { msg.textContent = 'Please provide name and email or wallet address.'; return }
    msg.textContent = 'Thanks! We received your request. We will contact you soon.';
    // Simulate form send — replace with real endpoint when ready
    console.log('Pilot request', { name: n, email: e });
    document.getElementById('name').value = ''; document.getElementById('email').value = '';
}