import AvatarMale from "../assets/avatar_male.png";
import AvatarFemale from "../assets/avatar_female.png";
import { useEffect, useState } from "react";

const Contacts = () => {
  const [isExpanded, setExpand] = useState(false);

  const classes = isExpanded ? "continuation expanded" : "continuation";

  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => {
        window.location.href = "#contacts";
      }, 200);
    }
  }, [isExpanded]);

  return (
    <div className="d-flex justify-content-end" id="contacts">
      <div className="menu">
        <div className="menuItem">
          <h3>Kontakty</h3>
        </div>
      </div>
      <div className="landingPageFilter2">
        <div className="bgcolor" />
        <div className="landingPageFilter2body">
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center w-100">
              <div className="line" />
              <div className="mx-3 name">Generální manažer</div>
              <div className="line" />
            </div>
            <div className="d-flex w-100 mt-5">
              <div className="w-50 d-flex justify-content-center">
                <img src={AvatarMale} alt="avatar" className="avatar" />
              </div>
              <div className="w-50">
                <h5 className="my-3">Vašek</h5>
                <ul className="none mt-5">
                  <li>Komunikace s klienty</li>
                  <li>
                    Tel.: <span className="color">+420 XXX XXX XXX</span>
                  </li>
                  <li>
                    E-mail:{" "}
                    <span className="color">vasek@brzynashledanou.cz</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rest mt-5" onClick={() => setExpand(!isExpanded)}>
            <h4 className="w-100 background mt-3">
              {!isExpanded ? "Zobrazit" : "Skrýt"} celý tým
            </h4>
          </div>

          <div className={classes}>
            <div className="d-flex flex-column align-items-center mt-5">
              <div className="d-flex w-100 mt-3 mb-5">
                <div className="w-50 d-flex justify-content-center">
                  <img src={AvatarFemale} alt="avatar" className="avatar" />
                </div>
                <div className="w-50">
                  <h5 className="my-3">Adéla</h5>
                  <ul className="none mt-5">
                    <li>Organizátor, komunikace s klienty</li>
                    <li>
                      Tel.: <span className="color">+420 XXX XXX XXX</span>
                    </li>
                    <li>
                      E-mail:{" "}
                      <span className="color">adéla@brzynashledanou.cz</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center w-100">
                <div className="line" />
                <div className="mx-3 name">Organizace</div>
                <div className="line" />
              </div>
              <div className="d-flex w-100 mt-5">
                <div className="w-50 d-flex justify-content-center">
                  <img src={AvatarFemale} alt="avatar" className="avatar" />
                </div>
                <div className="w-50">
                  <h5 className="my-3">Anežka</h5>
                  <ul className="none mt-5">
                    <li>Diskuze detailu, příprava řešení</li>
                    <li>
                      Tel.: <span className="color">+420 XXX XXX XXX</span>
                    </li>
                    <li>
                      E-mail:{" "}
                      <span className="color">anežka@brzynashledanou.cz</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex w-100 mt-5">
                <div className="w-50 d-flex justify-content-center">
                  <img src={AvatarFemale} alt="avatar" className="avatar" />
                </div>
                <div className="w-50">
                  <h5 className="my-3">Pája</h5>
                  <ul className="none mt-5">
                    <li>Zahraniční klienti, </li>
                    <li>
                      Tel.: <span className="color">+420 XXX XXX XXX</span>
                    </li>
                    <li>
                      E-mail:{" "}
                      <span className="color">pajic@brzynashledanou.cz</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center mt-5">
              <div className="d-flex align-items-center w-100">
                <div className="line" />
                <div className="mx-3 name">Marketingové oddělení</div>
                <div className="line" />
              </div>
              <div className="d-flex w-100 mt-5">
                <div className="w-50 d-flex justify-content-center">
                  <img src={AvatarFemale} alt="avatar" className="avatar" />
                </div>
                <div className="w-50">
                  <h5 className="my-3">Kačka</h5>
                  <ul className="none mt-5">
                    <li>SEO, marketingové kampaně, sociální sítě</li>
                    <li>
                      Tel.: <span className="color">+420 XXX XXX XXX</span>
                    </li>
                    <li>
                      E-mail:{" "}
                      <span className="color">kateřina@brzynashledanou.cz</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex w-100 mt-5">
                <div className="w-50 d-flex justify-content-center">
                  <img src={AvatarFemale} alt="avatar" className="avatar" />
                </div>
                <div className="w-50">
                  <h5 className="my-3">Verča</h5>
                  <ul className="none mt-5">
                    <li>Reklamy, besedy, propagace</li>
                    <li>
                      Tel.: <span className="color">+420 XXX XXX XXX</span>
                    </li>
                    <li>
                      E-mail:{" "}
                      <span className="color">veronika@brzynashledanou.cz</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center mt-5">
              <div className="d-flex align-items-center w-100">
                <div className="line" />
                <div className="mx-3 name">Účetní oddělení</div>
                <div className="line" />
              </div>
              <div className="d-flex w-100 mt-5">
                <div className="w-50 d-flex justify-content-center">
                  <img src={AvatarMale} alt="avatar" className="avatar" />
                </div>
                <div className="w-50">
                  <h5 className="my-3">Filip</h5>
                  <ul className="none mt-5">
                    <li>
                      Tel.: <span className="color">+420 XXX XXX XXX</span>
                    </li>
                    <li>
                      E-mail:{" "}
                      <span className="color">filip@brzynashledanou.cz</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex w-100 mt-5">
                <div className="w-50 d-flex justify-content-center">
                  <img src={AvatarFemale} alt="avatar" className="avatar" />
                </div>
                <div className="w-50">
                  <h5 className="my-3">Majda</h5>
                  <ul className="none mt-5">
                    <li>
                      Tel.: <span className="color">+420 XXX XXX XXX</span>
                    </li>
                    <li>
                      E-mail:{" "}
                      <span className="color">majda@brzynashledanou.cz</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
