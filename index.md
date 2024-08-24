
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
  <input value="high fever" type="button" onClick="document.symptom.Pneumonia.value='Pneumonia';document.symptom.Influenza.value='Influenza'">
  <input value="joint pain" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever';document.symptom.GlandularFever.value='Glandular fever'">
  <input value="lesion anywhere" type="button" onClick="document.symptom.Monkeypox.value='Monkeypox'">
  <input value="muscle twitches" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="rash anywhere" type="button" onClick="document.symptom.Monkeypox.value='Monkeypox'">
  <input value="red skin rash" type="button" onClick="document.symptom.ScarletFever.value='Scarlet fever'">
  <input value="shaking body" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="skin rash" type="button" onClick="document.symptom.ScarletFever.value='Scarlet fever'">
  <input value="sweating excessively" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="temperature of 37C" type="button" onClick="document.symptom.Cold.value='Cold'">
  <input value="temperature above 37C" type="button" onClick="document.symptom.Influenza.value='Influenza'">
  <input value="temperature above 39C" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever';document.symptom.Influenza.value='Influenza'">
</span></p>

<p>Chest<span>
  <input value="chest discomfort" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';document.symptom.AcuteBronchitis.value='Acute bronchitis'">
  <input value="chest pain" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';document.symptom.AcuteBronchitis.value='Acute bronchitis'">
  <input value="skin rash" type="button" onClick="document.symptom.ScarletFever.value='Scarlet fever'">
</span></p>

<p>Digestive system<span>
  <input value="constipation" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">

</span></p>


<!-- Health condition -->

  <input value="" name="AcuteBronchitis" size="12" type="text">
  <input value="" name="Cold" size="3" type="text">
  <input value="" name="GlandularFever" size="11" type="text">
  <input value="" name="Influenza" size="6" type="text">
  <input value="" name="Monkeypox" size="7" type="text">
  <input value="" name="POTS" size="36" type="text">
  <input value="" name="Pneumonia" size="7" type="text">
  <input value="" name="RheumaticFever" size="11" type="text">
  <input value="" name="ScarletFever" size="8" type="text">

</form>
