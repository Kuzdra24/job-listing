import data from "./data.json" assert { type: "json" };

const initCompanyComponent = ({
  isNew,
  company,
  logo,
  featured,
  position,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  const main = document.querySelector(".main__container");
  const wrapper = document.createElement("div");
  wrapper.className = `company__container ${
    isNew ? "section__company-new" : ""
  }`;
  const companyInfo = `
        <div style="display: flex">
          <img src="${logo}" />
          <div class="main__info">
            <div class="company__info">
              <span>${company}</span>
              ${isNew ? '<div class="additional__info"><p>NEW!</p></div>' : ""}
              ${
                featured
                  ? '<div class="additional__info"><p>FEATURED</p></div>'
                  : ""
              }
            </div>
            <h3>${position}</h3>
            <div class="add__info-job">
              <p>${postedAt}</p>
              <p>${contract}</p>
              <p>${location}</p>
            </div>
          </div>
        </div>
        <div class="section__albility-stack">
          ${languages.map(
            (lan) => `
            <div class="albility-stack"><p>${lan}</p></div>
          `)}
          ${tools.map(
            (tool) => `
          <div class="albility-stack"><p>${tool}</p></div>
          `)}
        </div>
    `;
  wrapper.innerHTML = companyInfo;
  main.appendChild(wrapper);
};

data.map((data) => initCompanyComponent(data))
