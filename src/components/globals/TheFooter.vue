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

    .content__footer {
      margin-inline: auto;
      height: 100%;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 10em !important;

      .section__footer {
        max-width: 30% !important;

        .title__section-footer {
        }

        .contact__footer {
        }

        &.img__centre {
          height: 10em;
          display: inline !important;

          img {
            height: 100%;
          }
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

  .content__footer {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 2em;
    padding: 10px;
    margin-bottom: 1em;

    .section__footer {
      max-width: 50%;

      .title__section-footer {
        color: $white-brighter;
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 0.5em;
      }

      .contact__footer {
        color: $white-brighter;

        .footer__social {
          font-size: 1.5rem;
        }
      }

      &.img__centre {
        display: none;
      }

      .socials__footer {
        color: $white-brighter;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;

        .footer__social {
          font-size: 1.5rem;
          margin: 0.2em 0.3em 0 0.3em;
          color: $white-brighter;
        }
      }
    }
  }

  .copyright {
    color: $white-brighter;
    width: 80%;
    margin-inline: auto;
    border-top: groove 1px $white-brighter;
    padding: 2px;
    font-size: 14px;
  }
}
</style>