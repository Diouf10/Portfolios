import './About.css'
import imgMgrp from '../../assets/images/logo-ecole-secondaire-mgr-a-m-parent.png';
import WaganeOrdi from '../../assets/images/WaganeOrdi.jpg';
import WaganeGoodVibes from '../../assets/images/WaganeGoodVibes.JPG';
import infos from '../../assets/images/infos.jpeg';

/**
 * La page À Propos.
 */
function About() {
    return(
      <>
      <section class="histoire">
      <div class="wrapper">
        <div
          class="histoires"
          data-aos="fade-up-right"
          data-aos-duration="3000"
        >
          <div class="infosHistoires">
            <h1>Mon Histoire</h1>
            <p>
              Bonjour, Moi c’est Mouhammad Wagane Diouf et j’ai 21 ans. Je me
              décris comme étant une personne ambitieuse, sérieuse, humble et
              déterminé. Ce que j’aime le plus c’est réfléchir et régler des
              problèmes. C’est pourquoi j’adore la programmation, celle-ci me
              permet d'allier réflexion, création et résolution de problème.
            </p>
          </div>
          <img src={WaganeOrdi} alt="Photo_Mouhammad" />
        </div>

        <div class="histoires" data-aos="fade-up-left" data-aos-duration="3000">
          <img
            src={imgMgrp}
            alt="logo-ecole-secondaire-mgr-am-parent"
          />
          <div class="infosHistoires">
            <p>
              Au secondaire, je suis allé à l'école secondaire
              <strong>Monseigneur-Parent.</strong> Ayant déjà un faible pour les
              technologies et les mathématiques, je suis entré dans
              <strong> concentration Science et Technologies.</strong> C’est
              dans ces années où j'ai créé mon premier jeu vidéo GameMaker et
              mes premiers photomontages.
            </p>
          </div>
        </div>

        <div
          class="histoires"
          data-aos="fade-up-right"
          data-aos-duration="3000"
        >
          <div class="infosHistoires">
            <p>
              J'ai ensuite décider d'aller au cégep
              <strong>Édouard-Montpetit</strong> en
              <strong> technique d’intégration en multimédia.</strong> J'ai
              suivi ce programme pendant <strong>2 ans</strong> , et à la fin de
              la 2e année, j'ai pu constater que le multimédia n'était pas
              exactement ce que je recherchais.
            </p>
          </div>
          <img src={WaganeGoodVibes} alt="Photo_Mouhammad" />
        </div>

        <div class="histoires" data-aos="fade-up-left" data-aos-duration="3000">
          <img
            src={infos}
            alt="logo-ecole-secondaire-mgr-am-parent"
          />
          <div class="infosHistoires">
            <p>
              Finalement, me voici en
              <strong>technique de l'informatique</strong> au cégep
              <strong>Saint-Jean-Sur-Richelieu</strong>. Je suis actuellement en
              deuxième année de ce programme et j'ai trouvé ma vocation. Je
              souhaite grandir dans cette profession en tant que futur
              programmeur et entrepreneur.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="En-Résumé" data-aos="fade-up" data-aos-duration="3000">
      <div class="wrapper">
        <div class="quiSuisJe">
          <h1>Quels sont mes atouts ?</h1>
          <div class="cards">
            <div class="card">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <h2>?</h2>
                  </div>
                  <div class="flip-card-back">
                    <h1>Ambitieux</h1>
                    <p>
                      J'ai des projets à moyens et long termes qui sont prévus
                      pour les prochaines années à venir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <h2>?</h2>
                  </div>
                  <div class="flip-card-back">
                    <h1>Sérieux</h1>
                    <p>
                      Au moment de travailler sur un projet j'essaie toujours
                      d'être le plus professionnel possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <h2>?</h2>
                  </div>
                  <div class="flip-card-back">
                    <h1>Humble</h1>
                    <p>Je n'aime pas vanter les projets que je réalise.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <h2>?</h2>
                  </div>
                  <div class="flip-card-back">
                    <h1>Déterminé</h1>
                    <p>
                      Lorsque je dis que je vais faire quelque chose cela peut
                      prendre du temps, mais je le ferais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="Objectifs" data-aos="zoom-in-up" data-aos-duration="1000">
      <div class="wrapper">
        <div class="contentObjectif">
          <h1>Mes futurs objectifs</h1>
          <p>
            Je suis actuellement en recherche d'emploi pour un poste de
            <strong>développeur web</strong>. Ensuite avec l'expérience que
            j'aurais acquise, je souhaiterais travailler en temps que
            <strong>développeur web développeur freelance</strong>.
            <strong> Donc si mon profil vous interesse contactez-moi ! :)</strong>
          </p>
        </div>
      </div>
    </section>
        </>
    )
}
export default About;