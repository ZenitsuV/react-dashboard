import React from 'react';
import './Summary.css';
import KPIbox from '../components/KPIbox';

const Summary = () => {
  return (
    <div className="report_container">
      <section className="top_section">
        <div className="header_panel">
          <div className="filter_container">
            <div className="filter_wrapper">
              <div className="filter_text">Market</div>
              <div className="market_filter">
                <select>
                  <option value="AM-Market">AM Market</option>
                </select>
              </div>
              <div className="pop_up_filter">Filter</div>
            </div>
            <div className="period_toggle">
              <ul style={{ width: '253px', height: '25px' }}>
                <li
                  class="SummaryTime TimeToggle"
                  valueGet="C01W"
                  id="SummaryTimeC01W{{id}}"
                  style={{
                    borderTopLeftradius: '5px',
                    borderBottomLeftRadius: '5px',
                  }}
                >
                  CW
                </li>
                <li
                  class="SummaryTime TimeToggle"
                  valueGet="C04W"
                  id="SummaryTimeC04W{{id}}"
                >
                  C4W
                </li>
                <li
                  class="SummaryTime TimeToggle"
                  valueGet="C13W"
                  id="SummaryTimeC13W{{id}}"
                >
                  C13W
                </li>
                <li
                  class="SummaryTime TimeToggle"
                  valueGet="CQTD"
                  id="SummaryTimeCQTD{{id}}"
                  style={{
                    borderTopRightRadius: '5px',
                    borderBottomRightRadius: '5px',
                  }}
                >
                  QTD
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Date_wrapper">
          <h3 id="Summary_Alerts{{id}}" className="DataasofDateText">
            Data as of
          </h3>
        </div>
      </section>

      <section className="kpi_section_outer_container">
        <section className="kpi_section_inner_container">
          <div className="section_heading">
            <div className="section_heading_text">
              <span>Performance Metrics</span>
            </div>
          </div>
          <section className="kpi_inner">
            <div className="kpi_wrapper">
              <KPIbox />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Summary;
