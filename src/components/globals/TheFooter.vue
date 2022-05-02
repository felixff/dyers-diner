<template>
  <div class="container__footer">
    <div class="content__footer">
      <div class="section__footer">
        <div class="title__section-footer">Contact</div>
        <div class="contact__footer">Email: email@dyersdiner.co.uk</div>
        <div class="contact__footer">Call: 07XXX XXX XXX</div>
        <div class="contact__footer">Ipswich</div>
      </div>
      <div class="section__footer img__centre">
        <img src="@/assets/img/egg.png" alt="Egg model"/>
      </div>
      <div class="section__footer">
        <div class="title__section-footer">Follow us</div>
        <div class="socials__footer">Give us a like & follow!</div>
        <div class="socials__footer">
          <a id="facebook-bottom-link" href="" target="_blank">
            <i class="fab fa-facebook footer__social"></i>
          </a>
          <a id="instagram-bottom-link" href="" target="_blank">
            <i class="fab fa-instagram footer__social"></i>
          </a>
          <a id="snapchat-bottom-link" href="" target="_blank">
            <i class="fab fa-snapchat footer__social"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="copyright">&copy; Copyright 2022, Dyer's Diner | Designed and Built by CoreWeb Solutions</div>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped lang="scss">
@media screen and (min-width: 1064px) {
  .container__footer {
    width: 100%;
    background: hsla(347, 49%, 18%, 1);
    background: linear-gradient(to right, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%) !important;
    background: -moz-linear-gradient(to right, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%) !important;
    background: -webkit-linear-gradient(to right, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%) !important;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#461822", endColorstr="#F27302", GradientType=1);

    .content__footer {
      margin-inline: auto;
      height: 100%;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 20em !important;

      .section__footer {

        .title__section-footer {
        }

        .contact__footer {
        }
      }
    }

    .copyright {
      width: 80% !important;
    }
  }
}

.container__footer {
  height: 100%;
  width: 100%;
  background: hsla(347, 49%, 18%, 1);
  background: linear-gradient(to top, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%);
  background: -moz-linear-gradient(to top, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%);
  background: -webkit-linear-gradient(to top, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#461822", endColorstr="#F27302", GradientType=1);

  .content__footer {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 5em;
    padding: 10px;
    margin-bottom: 1em;

    .section__footer {
      max-width: 30%;

      .title__section-footer {
        color: $tertiary-brighter;
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 0.5em;
      }

      .contact__footer {
        color: $tertiary-brighter;

        .footer__social {
          font-size: 1.5rem;
        }
      }

      &.img__centre {
        height: 10em;

        img {
          height: 100%;
        }
      }

      .socials__footer {
        color: $tertiary-brighter;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;

        .footer__social {
          font-size: 1.5rem;
          margin: 0.2em 0.3em 0 0.3em;
        }
      }
    }
  }

  .copyright {
    color: $tertiary-brighter;
    width: 80%;
    margin-inline: auto;
    border-top: groove 1px $tertiary-brighter;
    padding: 2px;
    font-size: 14px;
  }
}
</style>