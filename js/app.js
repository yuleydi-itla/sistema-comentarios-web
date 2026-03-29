// Capturar datos del formulario y enviarlos al servidor
document.addEventListener('DOMContentLoaded', () => {
    console.log('Aplicación iniciada. Lista para la magia.');

    const form          = document.getElementById('commentForm');
    const nombreInput   = document.getElementById('nombre');
    const mensajeInput  = document.getElementById('mensaje');
    const avatarPreview = document.getElementById('avatarPreview');
    const formAlert     = document.getElementById('formAlert');
    const contenedor    = document.getElementById('commentsContainer');

    // ── Avatar en tiempo real ──
    nombreInput.addEventListener('input', function () {
        const val = this.value.trim();
        avatarPreview.textContent = val.length > 0 ? val.charAt(0).toUpperCase() : '?';
    });

    // ── Enviar comentario a api/guardar.php ──
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const nombre  = nombreInput.value.trim();
        const mensaje = mensajeInput.value.trim();

        formAlert.innerHTML = '';

        // Validaciones
        if (!nombre && !mensaje) {
            mostrarAlerta('Por favor escribe tu nombre y comentario antes de publicar.', 'error');
            return;
        }
        if (!nombre) {
            mostrarAlerta('Por favor escribe tu nombre antes de publicar.', 'error');
            return;
        }
        if (!mensaje) {
            mostrarAlerta('Por favor escribe un comentario antes de publicar.', 'error');
            return;
        }

        // Empaquetar los datos en FormData
        const formData = new FormData();
        formData.append('nombre',  nombre);
        formData.append('mensaje', mensaje);

        try {
            const res  = await fetch('api/guardar.php', {
                method: 'POST',
                body: formData
            });
            const texto = await res.text();

            mostrarAlerta(texto, 'success');
            form.reset();
            avatarPreview.textContent = '?';
            cargarComentarios();

        } catch (err) {
            mostrarAlerta('Error al enviar el comentario. Intenta de nuevo.', 'error');
            console.error(err);
        }
    });

    // ── Cargar comentarios desde api/obtener.php ──
    async function cargarComentarios() {
        try {
            const res  = await fetch('api/obtener.php');
            const data = await res.json();

            if (!data.length) {
                contenedor.innerHTML = '<p class="no-comments">Aún no hay comentarios. ¡Sé el primero!</p>';
                return;
            }

            contenedor.innerHTML = data.map(c => {
                const inicial = c.nombre.charAt(0).toUpperCase();
                const fecha   = new Date(c.fecha).toLocaleDateString('es-DO', {
                    year: 'numeric', month: 'long', day: 'numeric'
                });
                return `
                    <div class="comment-card">
                        <div class="d-flex align-items-center gap-3">
                            <div class="comment-avatar">${inicial}</div>
                            <div>
                                <div class="comment-author">${c.nombre}</div>
                                <div class="comment-date">${fecha}</div>
                            </div>
                        </div>
                        <div class="comment-divider"></div>
                        <p class="comment-text">${c.mensaje}</p>
                    </div>
                `;
            }).join('');

        } catch (err) {
            contenedor.innerHTML = '<p class="no-comments">No se pudieron cargar los comentarios.</p>';
            console.error(err);
        }
    }

    // ── Función auxiliar para mostrar alertas ──
    function mostrarAlerta(texto, tipo) {
        formAlert.innerHTML = `<div class="alert-custom alert-${tipo}">${texto}</div>`;
    }

    // Cargar comentarios al iniciar
    cargarComentarios();
});
