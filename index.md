<link href="./styles.css" rel="stylesheet" />

<p>Click on the button below which match the symptom or symptoms you have.</p>
<p>In the section at the bottom of the page a cell may populate with the health issues that may match the symptom.</p>

<form name="symptom">

<!-- Symptom -->

<p>Abdomen<span>
  <input value="skin rash" type="button" onClick="document.symptom.ScarletFever.value='Scarlet fever'">
  </span></p>

<p>Arms<span>
  <input value="skin rash" type="button" onClick="document.symptom.ScarletFever.value='Scarlet fever'">
</span></p>

<p>Body<span>
  <input value="body aches" type="button" onClick="document.symptom.Influenza.value='Influenza';document.symptom.Monkeypox.value='Monkeypox'">
  <input value="body pains" type="button" onClick="document.symptom.Influenza.value='Influenza'">
  <input value="fever" type="button" onClick="document.symptom.GlandularFever.value='Glandular fever';document.symptom.AcuteBronchitis.value='Acute bronchitis';document.symptom.Influenza.value='Influenza'">

</span></p>

<!-- Health condition -->

  <input value="" name="AcuteBronchitis" size="10" type="text">
  <input value="" name="GlandularFever" size="10" type="text">
  <input value="" name="Influenza" size="6" type="text">
  <input value="" name="Monkeypox" size="7" type="text">
  <input value="" name="ScarletFever" size="8" type="text">

</form>
