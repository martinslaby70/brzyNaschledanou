const AboutUs = () => {
  return (
    <div className="d-flex justify-content-end" id="services">
      <div className="menu">
        <div className="menuItem">
          <h3>Služby</h3>
        </div>
      </div>
      <div className="landingPageFilter2">
        <div className="bgcolor" />
        <div className="landingPageFilter2body">
          <div className="d-flex flex-column">
            <h4>
              Nabízíme zákazníkům kompletní obstarání jejich posledního
              rozloučení a posledních přání
            </h4>

            <h5 className="mt-5">Ukázkové možnosti:</h5>
            <ul>
              <li>Zasazení popela do kořenů stromu</li>
              <li>Rozprášení na zvoleném (i netradičním) místě na světě</li>
              <li>Výrobky z popela</li>
              <li>
                Zařízení posledního rozloučení (místa, hudba, výzdoba, jídlo,
                obřad)
              </li>
              <li>Foto dekorace</li>
              <li>Video o životě</li>
              <li>Podání informací o dresscodu smutečním hostům</li>
              <li>Tisk parte, oznámení, pozvánek</li>
              <li>Zajištění zvířat, která mají být součástí obřadu</li>
            </ul>
            <h5 className="mt-2">
              Pokud vám žádná z těchto možností nesedí, nebo máte svoji unikátní
              vizi.
              <span>
                <a href="#contacts"> Neváhejte se na nás obrátit.</a>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
