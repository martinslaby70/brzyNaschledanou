const Agency = () => {
  return (
    <div className="d-flex justify-content-end" id="aboutUs">
      <div className="menu">
        <div className="menuItem">
          <h3>O nás</h3>
        </div>
      </div>
      <div className="landingPageFilter2">
        <div className="bgcolor" />
        <div className="landingPageFilter2body">
          <div className="d-flex flex-column mt-3">
            <h4>
              Jsme nově založená nadnárodní alternativní agentura
              zprostředkovávající pohřební služby, s osobním přístupem k
              zákazníkům a nebojíme se přizpůsobit i těm nejvýstřednějším
              přáním.
            </h4>

            <div className="mt-3">
              <h4 className="mt-5">Proč právě my ?</h4>
              <ul className="mt-4">
                <li>Pomůžeme vám naplnit představy vlastního odchodu </li>
                <li>
                  Zbavíme vás strachu ze zařizování všech okolností kolem
                  pohřbu 
                </li>
                <li>
                  O tématu sa dokážeme bavit s otevřeně ale zároveň s citem
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agency;
