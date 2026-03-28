<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sistema de Comentarios</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --gold: #c9a84c;
      --gold-light: #e8d5a3;
      --dark: #0d0d0d;
      --dark-2: #141414;
      --dark-3: #1c1c1c;
      --dark-4: #242424;
      --text-primary: #f0ece4;
      --text-muted: #8a8070;
      --border: rgba(201, 168, 76, 0.2);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--dark);
      color: var(--text-primary);
      font-family: 'DM Sans', sans-serif;
      font-weight: 300;
      min-height: 100vh;
      overflow-x: hidden;
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,168,76,0.08) 0%, transparent 70%),
        radial-gradient(ellipse 40% 30% at 90% 80%, rgba(201,168,76,0.04) 0%, transparent 60%);
      pointer-events: none;
      z-index: 0;
    }

    .navbar-custom {
      background: rgba(13,13,13,0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      padding: 1.2rem 0;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .navbar-brand-text {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--gold) !important;
      letter-spacing: 0.05em;
      text-decoration: none;
    }

    .navbar-tagline {
      font-size: 0.7rem;
      color: var(--text-muted);
      letter-spacing: 0.25em;
      text-transform: uppercase;
    }

    .hero {
      position: relative;
      z-index: 1;
      padding: 6rem 0 4rem;
      text-align: center;
    }

    .hero-label {
      display: inline-block;
      font-size: 0.7rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--gold);
      border: 1px solid var(--border);
      padding: 0.4rem 1.2rem;
      margin-bottom: 2rem;
      animation: fadeUp 0.8s ease both;
    }

    .hero-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2.8rem, 6vw, 5rem);
      font-weight: 300;
      line-height: 1.1;
      color: var(--text-primary);
      animation: fadeUp 0.8s 0.15s ease both;
    }

    .hero-title em {
      font-style: italic;
      color: var(--gold);
    }

    .hero-subtitle {
      margin-top: 1.2rem;
      font-size: 1rem;
      color: var(--text-muted);
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      animation: fadeUp 0.8s 0.3s ease both;
    }

    .divider-gold {
      width: 60px;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
      margin: 2.5rem auto;
      animation: fadeUp 0.8s 0.4s ease both;
    }

    .form-section {
      position: relative;
      z-index: 1;
      padding-bottom: 5rem;
    }

    .form-card {
      background: var(--dark-2);
      border: 1px solid var(--border);
      border-radius: 2px;
      padding: 2.5rem;
      position: relative;
      overflow: hidden;
      animation: fadeUp 0.8s 0.5s ease both;
    }

    .form-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
    }

    .form-card-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--text-primary);
      margin-bottom: 0.3rem;
    }

    .form-card-sub {
      font-size: 0.8rem;
      color: var(--text-muted);
      letter-spacing: 0.1em;
      margin-bottom: 2rem;
    }

    .form-label-custom {
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 0.5rem;
      display: block;
    }

    .form-control-custom {
      background: var(--dark-3);
      border: 1px solid rgba(201,168,76,0.15);
      border-radius: 2px;
      color: var(--text-primary);
      padding: 0.75rem 1rem;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.9rem;
      width: 100%;
      transition: border-color 0.3s, background 0.3s;
      outline: none;
    }

    .form-control-custom:focus {
      border-color: var(--gold);
      background: var(--dark-4);
    }

    .form-control-custom::placeholder {
      color: rgba(138,128,112,0.5);
    }

    textarea.form-control-custom {
      resize: vertical;
      min-height: 120px;
    }

    .avatar-row {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .avatar-placeholder {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: var(--dark-4);
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.3rem;
      color: var(--gold);
      flex-shrink: 0;
      transition: background 0.3s;
      text-transform: uppercase;
    }

    .btn-submit {
      background: transparent;
      border: 1px solid var(--gold);
      color: var(--gold);
      font-family: 'DM Sans', sans-serif;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      padding: 0.85rem 2.5rem;
      border-radius: 2px;
      cursor: pointer;
      transition: background 0.3s, color 0.3s;
      margin-top: 1rem;
    }

    .btn-submit:hover {
      background: var(--gold);
      color: var(--dark);
    }

    .comments-section {
      position: relative;
      z-index: 1;
      padding: 4rem 0 6rem;
      border-top: 1px solid var(--border);
    }

    .section-header {
      margin-bottom: 3rem;
    }

    .section-label {
      font-size: 0.7rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 0.5rem;
    }

    .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.2rem;
      font-weight: 300;
      color: var(--text-primary);
    }

    .comment-card {
      background: var(--dark-2);
      border: 1px solid var(--border);
      border-radius: 2px;
      padding: 1.8rem;
      margin-bottom: 1.2rem;
      position: relative;
      overflow: hidden;
      transition: border-color 0.3s, transform 0.3s;
      animation: fadeUp 0.6s ease both;
    }

    .comment-card:hover {
      border-color: rgba(201,168,76,0.4);
      transform: translateY(-2px);
    }

    .comment-card::after {
      content: '\201C';
      position: absolute;
      top: 0.5rem;
      right: 1.2rem;
      font-family: 'Cormorant Garamond', serif;
      font-size: 5rem;
      color: rgba(201,168,76,0.06);
      line-height: 1;
      pointer-events: none;
    }

    .comment-avatar {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--dark-4), var(--dark-3));
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.2rem;
      color: var(--gold);
      flex-shrink: 0;
      text-transform: uppercase;
    }

    .comment-author {
      font-family: 'DM Sans', sans-serif;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-primary);
    }

    .comment-date {
      font-size: 0.72rem;
      color: var(--text-muted);
      letter-spacing: 0.05em;
    }

    .comment-text {
      font-size: 0.92rem;
      color: rgba(240,236,228,0.75);
      line-height: 1.75;
      margin-top: 1rem;
    }

    .comment-divider {
      width: 30px;
      height: 1px;
      background: var(--border);
      margin: 0.8rem 0;
    }

    .footer {
      position: relative;
      z-index: 1;
      border-top: 1px solid var(--border);
      padding: 2rem 0;
      text-align: center;
    }

    .footer-text {
      font-size: 0.75rem;
      color: var(--text-muted);
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    .footer-gold {
      color: var(--gold);
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 576px) {
      .form-card { padding: 1.5rem; }
      .hero { padding: 4rem 0 2.5rem; }
    }
  </style>
</head>
<body>

  <nav class="navbar-custom">
    <div class="container d-flex align-items-center justify-content-between">
      <div>
        <a href="#" class="navbar-brand-text">Opiniones</a>
        <div class="navbar-tagline">Sistema de Comentarios</div>
      </div>
      <div style="font-size:0.75rem; color:var(--text-muted); letter-spacing:0.1em;">
        ITLA — Programación Web
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <div class="hero-label">Comparte tu opinión</div>
      <h1 class="hero-title">Tu opinión <em>es importante.</em><br>Déjanos conocerla.</h1>
      <p class="hero-subtitle">Un lugar sencillo y honesto para compartir lo que piensas. Escribe, publica y lee lo que otros tienen que decir.</p>
      <div class="divider-gold"></div>
    </div>
  </section>

  <section class="form-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="form-card">
            <h2 class="form-card-title">Escribe un comentario</h2>
            <p class="form-card-sub">Tu opinión será publicada al instante</p>

            <form id="commentForm" action="guardar_comentario.php" method="POST">

              <div class="avatar-row">
                <div class="avatar-placeholder" id="avatarPreview">?</div>
                <div style="flex:1">
                  <label class="form-label-custom" for="nombre">Tu nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    class="form-control-custom"
                    placeholder="¿Cómo te llamas?"
                    maxlength="50"
                  />
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label-custom" for="comentario">Tu comentario</label>
                <textarea
                  id="comentario"
                  name="comentario"
                  class="form-control-custom"
                  placeholder="Escribe lo que piensas..."
                  maxlength="500"
                ></textarea>
              </div>

              <button type="submit" class="btn-submit">Publicar comentario</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="comments-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">

          <div class="section-header">
            <p class="section-label">Publicaciones</p>
            <h2 class="section-title">Lo que dicen los demás</h2>
          </div>

          <div id="commentsContainer">
          </div>

        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <p class="footer-text">
        <span class="footer-gold">Opiniones</span> &nbsp;·&nbsp; ITLA Programación Web &nbsp;·&nbsp; 2026
      </p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    const nombreInput = document.getElementById('nombre');
    const avatarPreview = document.getElementById('avatarPreview');
    const form = document.getElementById('commentForm');

    nombreInput.addEventListener('input', function() {
      const val = this.value.trim();
      avatarPreview.textContent = val.length > 0 ? val.charAt(0).toUpperCase() : '?';
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const comentario = document.getElementById('comentario').value.trim();
      const mensajeExistente = document.getElementById('mensajeEstado');

      if (mensajeExistente) mensajeExistente.remove();

      const mensaje = document.createElement('div');
      mensaje.id = 'mensajeEstado';
      mensaje.style.marginTop = '1rem';
      mensaje.style.padding = '0.75rem 1rem';
      mensaje.style.borderRadius = '2px';
      mensaje.style.fontSize = '0.85rem';
      mensaje.style.letterSpacing = '0.05em';

      if (nombre === '' && comentario === '') {
        mensaje.style.border = '1px solid rgba(201,68,68,0.4)';
        mensaje.style.color = '#e07070';
        mensaje.style.background = 'rgba(201,68,68,0.08)';
        mensaje.textContent = 'Por favor escribe tu nombre y tu comentario antes de publicar.';
        form.appendChild(mensaje);
        return;
      }

      if (nombre === '') {
        mensaje.style.border = '1px solid rgba(201,68,68,0.4)';
        mensaje.style.color = '#e07070';
        mensaje.style.background = 'rgba(201,68,68,0.08)';
        mensaje.textContent = 'Por favor escribe tu nombre antes de publicar.';
        form.appendChild(mensaje);
        return;
      }

      if (comentario === '') {
        mensaje.style.border = '1px solid rgba(201,68,68,0.4)';
        mensaje.style.color = '#e07070';
        mensaje.style.background = 'rgba(201,68,68,0.08)';
        mensaje.textContent = 'Por favor escribe un comentario antes de publicar.';
        form.appendChild(mensaje);
        return;
      }

      mensaje.style.border = '1px solid rgba(201,168,76,0.4)';
      mensaje.style.color = '#c9a84c';
      mensaje.style.background = 'rgba(201,168,76,0.08)';
      mensaje.textContent = '¡Tu comentario fue publicado con éxito!';
      form.appendChild(mensaje);
      form.submit();
    });
  </script>

</body>
</html>

