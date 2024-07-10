const translations = {
  en: {
    homeLink: "Home",
    aboutLink: "About Us",
    servicesLink: "Our Services",
    contactLink: "Contact",
    contentTitle: "Unstoppable Starts Here℠",
    contentText:
      "Success shouldn’t just be a goal; it should be the starting point. As part of the RE/MAX® network you’ll experience a culture focused on resources that lift your business. Like supportive broker/owners with relevant field insight and values that make a difference in our communities. Worldwide exposure and connections with industry experts. And over 140,000 talented agents around the globe who will inspire you to work toward greatness.",
    aboutTitle: "Together, We’re A Powerhouse",
    aboutText:
      "In-market broker/owner support, a big brand, education, a referral database, user-friendly tools – if it’s on your wish list, we likely have it. When it comes to building your personal brand, the sky’s the limit. You can be part of residential, commercial and luxury real estate networks that each hold long-established reputations for delivering results. For more than 50 years, the RE/MAX network has helped agents run their businesses in any market condition. Whether it’s a recession, low inventory or a global pandemic, RE/MAX agents continue to support and serve buyers and sellers all over the world.",
    teamTitle: "Meet Our Team",
    teamMember1: "Team Member 1",
    teamMember2: "Team Member 2",
    teamMember3: "Team Member 3",
    teamMember4: "Team Member 4",
    servicesTitle: "Our Services",
    service1: "Service 1",
    service2: "Service 2",
    service3: "Service 3",
    service4: "Service 4",
    service5: "Service 5",
    service6: "Service 6",
    propertiesTitle: "Our Properties",
    property1: "Address of Home 1",
    property2: "Address of Home 2",
    property3: "Address of Home 3",
    contactTitle: "Contact Us",
    contactAddress: "Address: Your Agency Address",
    contactPhone: "Phone: Your Phone Number",
    contactEmail: "Email: Your Email",
    footerText: "REMAX - Your Trusted Real Estate Partner",
  },
  sq: {
    homeLink: "Faqja Kryesore",
    aboutLink: "Rreth Nesh",
    servicesLink: "Sherbimet Tona",
    contactLink: "Kontakt",
    contentTitle: "E pandalshme fillon këtu℠",
    contentText:
      "Suksesi nuk duhet të jetë vetëm një qëllim; duhet të jetë pika e fillimit. Si pjesë e rrjetit RE/MAX® ju do të përjetoni një kulturë të fokusuar në burime që ngrejnë biznesin tuaj. Si mbështetës broker/pronarë me njohuri të rëndësishme të fushës dhe vlera që bëjnë një ndryshim në komunitetet tona. Ekspozim në mbarë botën dhe lidhje me ekspertë të industrisë. Dhe mbi 140,000 agjentë të talentuar në të gjithë botën që do t'ju inspirojnë të punoni drejt madhështisë.",
    aboutTitle: "Së bashku, ne jemi një fuqi",
    aboutText:
      "Mbështetje në treg për pronarët e ndërmjetësve, një markë e madhe, edukim, një bazë të dhënash për referime, mjete të lehta për përdorim – nëse është në listën tuaj të dëshirave, ne ndoshta e kemi atë. Kur bëhet fjalë për ndërtimin e markës suaj personale, qielli është kufiri. Ju mund të bëheni pjesë e rrjeteve rezidenciale, komerciale dhe të pasurive të luksit që secila ka reputacion të gjatë për dorëzimin e rezultateve. Për më shumë se 50 vjet, rrjeti RE/MAX ka ndihmuar agjentët të drejtojnë bizneset e tyre në çdo gjendje të tregut. Qoftë një recesion, inventar i ulët apo një pandemi globale, agjentët e RE/MAX vazhdojnë të mbështesin dhe shërbejnë blerësve dhe shitësve në të gjithë botën.",
    teamTitle: "Njihuni me Ekipin Tonë",
    teamMember1: "Anëtar i Ekipit 1",
    teamMember2: "Anëtar i Ekipit 2",
    teamMember3: "Anëtar i Ekipit 3",
    teamMember4: "Anëtar i Ekipit 4",
    servicesTitle: "Shërbimet Tona",
    service1: "Shërbimi 1",
    service2: "Shërbimi 2",
    service3: "Shërbimi 3",
    service4: "Shërbimi 4",
    service5: "Shërbimi 5",
    service6: "Shërbimi 6",
    propertiesTitle: "Pronat Tona",
    property1: "Adresa e Shtëpisë 1",
    property2: "Adresa e Shtëpisë 2",
    property3: "Adresa e Shtëpisë 3",
    contactTitle: "Na Kontaktoni",
    contactAddress: "Adresa: Adresa e Agjencisë Suaj",
    contactPhone: "Telefon: Numri Juaj i Telefonit",
    contactEmail: "Email-i Juaj",
    footerText:
      "REMAX - Partneri Juaj i Besueshëm i Pasurive të Patundshme",
  },
};

document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    document.getElementById("home-link").textContent =
      translations[selectedLanguage].homeLink;
    document.getElementById("about-link").textContent =
      translations[selectedLanguage].aboutLink;
    document.getElementById("services-link").textContent =
      translations[selectedLanguage].servicesLink;
    document.getElementById("contact-link").textContent =
      translations[selectedLanguage].contactLink;
    document.getElementById("content-title").textContent =
      translations[selectedLanguage].contentTitle;
    document.getElementById("content-text").textContent =
      translations[selectedLanguage].contentText;
    document.getElementById("about-title").textContent =
      translations[selectedLanguage].aboutTitle;
    document.getElementById("about-text").textContent =
      translations[selectedLanguage].aboutText;
    document.getElementById("team-title").textContent =
      translations[selectedLanguage].teamTitle;
    document.getElementById("team-member-1").textContent =
      translations[selectedLanguage].teamMember1;
    document.getElementById("team-member-2").textContent =
      translations[selectedLanguage].teamMember2;
    document.getElementById("team-member-3").textContent =
      translations[selectedLanguage].teamMember3;
    document.getElementById("team-member-4").textContent =
      translations[selectedLanguage].teamMember4;
    document.getElementById("services-title").textContent =
      translations[selectedLanguage].servicesTitle;
    document.getElementById("service-1").textContent =
      translations[selectedLanguage].service1;
    document.getElementById("service-2").textContent =
      translations[selectedLanguage].service2;
    document.getElementById("service-3").textContent =
      translations[selectedLanguage].service3;
    document.getElementById("service-4").textContent =
      translations[selectedLanguage].service4;
    document.getElementById("service-5").textContent =
      translations[selectedLanguage].service5;
    document.getElementById("service-6").textContent =
      translations[selectedLanguage].service6;
    document.getElementById("properties-title").textContent =
      translations[selectedLanguage].propertiesTitle;
    document.getElementById("property-1").textContent =
      translations[selectedLanguage].property1;
    document.getElementById("property-2").textContent =
      translations[selectedLanguage].property2;
    document.getElementById("property-3").textContent =
      translations[selectedLanguage].property3;
    document.getElementById("contact-title").textContent =
      translations[selectedLanguage].contactTitle;
    document.getElementById("contact-address").textContent =
      translations[selectedLanguage].contactAddress;
    document.getElementById("contact-phone").textContent =
      translations[selectedLanguage].contactPhone;
    document.getElementById("contact-email").textContent =
      translations[selectedLanguage].contactEmail;
    document.getElementById("footer-text").textContent =
      translations[selectedLanguage].footerText;
  });
