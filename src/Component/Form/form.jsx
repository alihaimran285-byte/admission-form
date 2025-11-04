import React, { useState } from 'react';   
import './form.css';

const Form = () => {
  const [form, setForm] = useState({});

  const user = (e) => {
    const { name, value } = e.target;
    setForm((formvalue) => ({
      ...formvalue,
      [name]: value,
    }));
  };

  const submitForm =async  (e) => {
    e.preventDefault();
    console.log(" User Data ", form);
    try {
      const response= await fetch('http://localhost:3000/form/submit',{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(form)
      })
      if (response.ok) {
        console.log('recevied data',response);
        
      }
      else{
        console.log('something wrong');
        
      }
    } catch (error) {
      console.log(error);
      
    }
  };

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }
  let years = [];
  for (let i = 2025; i >= 1920; i--) {
    years.push(i);
  }
  const countries = [
        "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia",
        "Aruba", "Australia", "Austria", "Azerbaijan", "The Bahamas",
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
        "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
        "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada",
        "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile",
        "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros",
        "Congo", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia",
        "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Democratic Republic of the Congo",
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
        "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
        "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland",
        "France", "French Polynesia", "Gabon", "The Gambia", "Georgia",
        "Germany", "Ghana", "Gibraltar", "Greece", "Greenland",
        "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey",
        "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
        "Hong Kong", "Hungary", "Iceland", "India", "Indonesia",
        "Iran", "Iraq", "Ireland", "Israel", "Italy",
        "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan",
        "Kenya", "Kiribati", "North Korea", "South Korea", "Kosovo",
        "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
        "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi",
        "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
        "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico",
        "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
        "Montserrat", "Morocco", "Mozambique", "Myanmar", "Nagorno-Karabakh",
        "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles",
        "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "Niue", "Norfolk Island", "Turkish Republic of Northern Cyprus", "Northern Mariana", "Norway",
        "Oman", "Pakistan", "Palau", "Palestine", "Panama",
        "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Islands",
        "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of the Congo",
        "Romania", "Russia", "Rwanda", "Saint Barthelemy", "Saint Helena",
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
        "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
        "Slovenia", "Solomon Islands", "Somalia", "Somaliland", "South Africa",
        "South Ossetia", "South Sudan", "Spain", "Sri Lanka", "Sudan",
        "Suriname", "Svalbard", "eSwatini", "Sweden", "Switzerland",
        "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
        "Timor-Leste", "Togo", "Tokelau", "Tonga", "Transnistria Pridnestrovie",
        "Trinidad and Tobago", "Tristan da Cunha", "Tunisia", "Turkey", "Turkmenistan",
        "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
        "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
        "Vatican City", "Venezuela", "Vietnam", "British Virgin Islands", "Isle of Man",
        "US Virgin Islands", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia",
        "Zimbabwe", "Other"];

  return (
    <div className="form-container">
      <h1>COLLEGE ADMISSIONS FORM</h1>
      <form onSubmit={submitForm}>
        
        <label>Name</label>
        <div className="form-row">
          <input type="text" name="firstname" placeholder="First Name" onChange={user} />
          <input type="text" name="middlename" placeholder="Middle Initial"  onChange={user} />
          <input type="text" name="lastname" placeholder="Last Name" onChange={user} />
        </div>

        <label>Birth Date</label>
        <div className="form-row">
          <select name="month"  onChange={user}>
            <option value="">Select Month</option>
            {months.map((month, i) => (
              <option key={i} value={month}>{month}</option>
            ))}
          </select>

          <select name="day" onChange={user}>
            <option value="">Select Day</option>
            {days.map((day, i) => (
              <option key={i} value={day}>{day}</option>
            ))}
          </select>

          <select name="year"  onChange={user}>
            <option value="">Select Year</option>
            {years.map((year, i) => (
              <option key={i} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <label>Gender</label>
        <div className="form-row">
          <label><input type="radio" name="gender" value="male"  onChange={user}/> Male</label>
          <label><input type="radio" name="gender" value="female"  onChange={user}/> Female</label>

          <select name="country"  onChange={user}>
            <option value="">Select Country</option>
            {countries.map((country, i) => (
              <option key={i} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <label>Phone</label>
        <input type="tel" name="phone" placeholder="000-000-0000" onChange={user} />

        <label>Email</label>
        <input type="email" name="email" placeholder="example@email.com"  onChange={user} />

        <h3>Mailing Address</h3>
        <input type="text" name="streetaddress" placeholder="Street Address"  onChange={user} />
        <input type="text" name="streetaddress2" placeholder="Street Address Line 2"  onChange={user} />
        <div className="form-row">
          <input type="text" name="city" placeholder="City"  onChange={user} />
          <input type="text" name="state" placeholder="State"  onChange={user} />
          <input type="text" name="postalCode" placeholder="Postal/Zip Code"  onChange={user} />
        </div>

        <h3>Emergency Contact</h3>
        <div className="form-row">
          <input type="text" name="emergencyFirstname" placeholder="First Name"  onChange={user} />
          <input type="text" name="emergencyLastname" placeholder="Last Name"  onChange={user} />
          <input type="text" name="relationship" placeholder="Relationship"  onChange={user} />
        </div>
        <div className="form-row">
          <input type="email" name="emergencyEmail" placeholder="Email"  onChange={user} />
          <input type="tel" name="emergencyPhone" placeholder="Phone Number"  onChange={user} />
        </div>

        <label>Other Languages?</label>
        <label><input type="radio" name="languages" value="yes"  onChange={user}/> Yes</label>
        <label><input type="radio" name="languages" value="no"  onChange={user}/> No</label>

        <hr />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
