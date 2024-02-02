import { AppHeader } from '../uiFragments';
import { InvestmentChart } from '../data';
import { investmentData } from '../data/investmentData';
import { useEffect } from 'react';

const UserProfile = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://price-static.crypto.com/latest/public/static/widget/index.js';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="user_profile">
      <AppHeader />
      <section className="row g-5custom balance_container mt-5">
        <div className="col-lg-6">
          <h5>Balance Details</h5>

          <div className="details_container">
            <h5 className="clr-light fnt-14">Total Balance</h5>
            <p className="fnt-35 fw-bold">$0.00</p>

            <div className="">
              <section className="expenses_wrapper">
                <div className="expense_container total_earnings">
                  <span className="clr-light fnt-15">Total Earnings</span>
                  <span className="fnt-30 fw-bold">$0.00</span>
                </div>

                <div className="expense_container">
                  <span className="clr-light fnt-15">Total Investment</span>
                  <span className="fnt-30 fw-bold">$0.00</span>
                </div>
              </section>

              <section className="expenses_wrapper">
                <div className="expense_container">
                  <span className="clr-light fnt-15">Ref bonus</span>
                  <span className="fnt-30 fw-bold">$0.00</span>
                </div>

                <div className="expense_container">
                  <span className="clr-light fnt-15">Expected income</span>
                  <span className="fnt-30 fw-bold">$0.00</span>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <h5>Latest Transition</h5>
          <div className="latest_transaction_cotainer d-flex flex-column gap-3">
            <div className="transaction_card">
              <div className="d-flex flex-column">
                <p>Deposit</p>
                <small>date of deposit</small>
              </div>

              <span className="ammount inwards">0.5eth</span>
            </div>

            <div className="transaction_card">
              <div className="d-flex flex-column">
                <p>Withdrawal</p>
                <small>date of deposit</small>
              </div>

              <span className="ammount outwards">0.2eth</span>
            </div>
          </div>
        </div>
      </section>

      <section className="row g-5custom py-5 balance_container">
        {/* investment progress */}
        <div className="col-lg-8">
          <h5>Investment Progress</h5>
          <InvestmentChart chartData={investmentData} />
        </div>

        {/* crypto prices */}
        <div className="col-lg-4">
          <h5>Current Crypto Prices</h5>
          <div className="crypto_widget">
            <div
              id="crypto-widget-CoinList"
              data-transparent="true"
              data-design="classic"
              data-coin-ids="166,1,20,382,1986,440"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
