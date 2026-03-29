// Manejo del asincronismo y dibujado de UI

document.addEventListener('DOMContentLoaded', () => {
    
    // Referencias a los contenedores
    const nombreInput = document.getElementById('nombre');
    const avatarPreview = document.getElementById('avatarPreview');
    const form = document.getElementById('commentForm');
    const commentsContainer = document.getElementById('commentsContainer');

    // 1. Cargar comentarios al inicio desde la BD
    cargarComentarios();

    // 2. Previsualizador del Avatar 
    nombreInput.addEventListener('input', function() {
        const val = this.value.trim();
        avatarPreview.textContent = val.length > 0 ? val.charAt(0).toUpperCase() : '?';
    });

    // 3. Captura y envío del formulario a PHP
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = nombreInput.value.trim();
        const comentario = document.getElementById('comentario').value.trim();

        // Validacion simple
        if (nombre === '' || comentario === '') {
            mostrarMensaje('Rellena todos los campos antes de continuar.', 'error');
            return;
        }

        // Animacion del boton
        const btnSubmit = form.querySelector('.btn-submit');
        const txtBotonAntiguo = btnSubmit.textContent;
        btnSubmit.textContent = 'Publicando...';
        btnSubmit.disabled = true;

        // Limpiar errores viejos
        const msjAntiguo = document.getElementById('mensajeEstado');
        if (msjAntiguo) msjAntiguo.remove();

        // ===== PETICION FETCH (Misión Frontend Guardar) =====
        fetch('api/guardar.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, comentario })
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                mostrarMensaje('Tu opinión ya está en directo.', 'success');
                form.reset();
                avatarPreview.textContent = '?';
                cargarComentarios(); // Volver a pintar la lista para incorporar el nuevo
            } else {
                mostrarMensaje(data.message || 'Error guardando datos', 'error');
            }
        })
        .catch(err => {
            console.error('Error del Servidor:', err);
            mostrarMensaje('Fallo de red, verifica conexión.', 'error');
        })
        .finally(() => {
            btnSubmit.textContent = txtBotonAntiguo;
            btnSubmit.disabled = false;
        });
    });

    // Sistema de Alertas Visuales
    function mostrarMensaje(texto, tipo = 'error') {
        let mensaje = document.getElementById('mensajeEstado');
        if (!mensaje) {
            mensaje = document.createElement('div');
            mensaje.id = 'mensajeEstado';
            mensaje.style.marginTop = '1rem';
            mensaje.style.padding = '0.75rem 1rem';
            mensaje.style.borderRadius = '2px';
            mensaje.style.fontSize = '0.85rem';
            mensaje.style.letterSpacing = '0.05em';
            form.appendChild(mensaje);
        }

        if (tipo === 'error') {
            mensaje.style.border = '1px solid rgba(201,68,68,0.4)';
            mensaje.style.color = '#e07070';
            mensaje.style.background = 'rgba(201,68,68,0.08)';
        } else {
            mensaje.style.border = '1px solid rgba(201,168,76,0.4)';
            mensaje.style.color = '#c9a84c';
            mensaje.style.background = 'rgba(201,168,76,0.08)';
            setTimeout(() => mensaje.remove(), 4000); 
        }
        mensaje.textContent = texto;
    }

    // ===== PETICION FETCH (Misión Frontend Retornar Datos) =====
    function cargarComentarios() {
        if (!commentsContainer) return;

        fetch('api/obtener.php')
            .then(res => res.json())
            .then(data => {
                commentsContainer.innerHTML = '';
                
                // Array vacio (sin comentarios)
                if (!data || data.length === 0) {
                    commentsContainer.innerHTML = '<p style="color:var(--text-muted); font-size: 0.9rem;">Sé el primero en opinar.</p>';
                    return;
                }
                
                // Mapear cada fila PHP e inyectarla elegantemente
                data.forEach(item => {
                    const letra = item.nombre.charAt(0).toUpperCase();
                    // Plantilla literal (Inyectando diseño de Johan)
                    const cardHtml = `
                    <div class="comment-card">
                        <div class="d-flex align-items-center mb-3">
                            <div class="comment-avatar">${letra}</div>
                            <div class="ms-3">
                                <div class="comment-author">${item.nombre}</div>
                                <div class="comment-date">${item.fecha}</div>
                            </div>
                        </div>
                        <div class="comment-divider"></div>
                        <div class="comment-text">${item.comentario}</div>
                    </div>
                    `;
                    commentsContainer.innerHTML += cardHtml;
                });
            })
            .catch(err => {
                console.error('Error leyendo base de datos:', err);
                commentsContainer.innerHTML = '<p style="color:#e07070; font-size: 0.9rem;">Error al cargar las opiniones.</p>';
            });
    }
});
