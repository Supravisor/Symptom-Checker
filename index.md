
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
  <input value="fever" type="button" onClick="document.symptom.GlandularFever.value='Glandular fever';showTime([acuteBronchitis]);document.symptom.Influenza.value='Influenza'">
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
  <input value="chest discomfort" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime([acuteBronchitis]);">
  <input value="chest pain" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime([acuteBronchitis]);">
  <input value="skin rash" type="button" onClick="document.symptom.ScarletFever.value='Scarlet fever'">
</span></p>

<p>Digestive system<span>
  <input value="constipation" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="diarrhoea" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';document.symptom.Influenza.value='Influenza'">
  <input value="irritable bowel syndrome" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
</span></p>

<p>Ears<span>
  <input value="ache" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever'">
  <input value="blocked" type="button" onClick="document.symptom.Cold.value='Cold'">
  <input value="sound sensitivity" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
</span></p>

<p>Eyes<span>
  <input value="blurred vision" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="light sensitivity" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="tunnel vision" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="watery" type="button" onClick="document.symptom.Cold.value='Cold'">
</span></p>

<p>Face<span>
  <input value="lesion" type="button" onClick="document.symptom.Monkeypox.value='Monkeypox'">
  <input value="rash" type="button" onClick="document.symptom.Monkeypox.value='Monkeypox'">
</span></p>

<p>Feelings<span>
  <input value="almost fainting" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="anxiety" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="chills" type="button" onClick="document.symptom.Pneumonia.value='Pneumonia';document.symptom.Influenza.value='Influenza';document.symptom.Monkeypox.value='Monkeypox'">
  <input value="dizziness" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="fainting" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="fatigue" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime([acuteBronchitis]);document.symptom.Monkeypox.value='Monkeypox'">
  <input value="feeling extremely cold" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="feeling extremely hot" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="loss of energy for longer than a few weeks" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';document.symptom.GlandularFever.value='Glandular fever'">
  <input value="nausea" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="sleeping difficulty" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="tiredness" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';document.symptom.GlandularFever.value='Glandular fever';document.symptom.Cold.value='Cold'">
  <input value="unwell for longer than a few weeks" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';document.symptom.GlandularFever.value='Glandular fever'">
</span></p>

<p>Feet<span>
  <input value="tingling feet" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="walking long distance is difficult" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
</span></p>

<p>Hands<span>
  <input value="lesion" type="button" onClick="document.symptom.Monkeypox.value='Monkeypox'">
  <input value="rash" type="button" onClick="document.symptom.Monkeypox.value='Monkeypox'">
  <input value="tingling hands" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
</span></p>

<p>Head<span>
  <input value="brain fog" name="brain fog" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="cognitive issues" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="flushed cheeks" type="button" onClick="document.symptom.ScarletFever.value='Scarlet fever'">
  <input value="headache" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';document.symptom.GlandularFever.value='Glandular fever';document.symptom.Cold.value='Cold';document.symptom.Influenza.value='Influenza'">
  <input value="light headedness" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="migraines" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
</span></p>

<p>Heart<span>
  <input value="heart palpitations" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
</span></p>

<p>Lungs<span>
  <input value="phlegm cough" type="button" onClick="showTime([bronchitis, chronicObstructivePulmonaryDisease]);document.symptom.Pneumonia.value='Pneumonia';document.symptom.Tuberculosis.value='Tuberculosis';">
  <input value="mucus cough" type="button" onClick="showTime([bronchitis]);document.symptom.Pneumonia.value='Pneumonia';document.symptom.Tuberculosis.value='Tuberculosis';showTime([ChronicObstructivePulmonaryDisease]);">
  <input value="sputnum cough" type="button" onClick="showTime([bronchitis]);document.symptom.Pneumonia.value='Pneumonia';document.symptom.Tuberculosis.value='Tuberculosis';showTIme([chronicObstructivePulmonaryDisease]);">
</span></p>

<p>Mouth<span>
  <input value="a dry cough" type="button" onClick="document.symptom.Cold.value='Cold';document.symptom.Influenza.value='Influenza'">
  <input value="breathing difficulties" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="coated tonsils" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever'">
  <input value="coughing a sticky mucus" type="button" onClick="showTime([acuteBronchitis, asthma]);">
  <input value="coughing stomach acid" type="button" onClick="document.symptom.GastroesophagealRefluxDisease.value='Gastroesophageal reflux disease'">
  <input value="difficulty swallowing" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever'">
  <input value="dry cough lasting a few days" type="button" onClick="document.symptom.IrritantDust.value='Irritant (dust)';document.symptom.IrritantFumes.value='Irritant (fumes)';document.symptom.IrritantChemicals.value='Irritant (chemicals)';showTime([AirwayBlockage]);">
  <input value="dry cough lasting a few weeks" type="button" onClick="document.symptom.ViralIllnesses.value='Viral illnesses';showTime([bronchospasm]);document.symptom.ViralIllnesses.value='Viral illnesses';showTime([ACEInhibitors]);document.symptom.Asthma.value='Asthma'">
  <input value="enlarged tonsils" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever'">
  <input value="shortness of breath" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime([acuteBronchitis]);">
  <input value="smokers cough" type="button" onClick="document.symptom.LungDamage.value='Lung damage'">
  <input value="tickly cough" type="button" onClick="showTime([allergies]);">
  <input value="vomiting" type="button" onClick="document.symptom.Influenza.value='Influenza'">
  <input value="wheezing" type="button" onClick="showTime([acuteBronchitis]);">
</span></p>

<p>Neck<span>
  <input value="pain" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever'">
  <input value="skin rash" type="button" onClick="document.symptom.ScarletFever.value='Scarlet fever'">
  <input value="swollen glands" type="button" onClick="document.symptom.GlandularFever.value='Glandular fever'">
</span></p>

<p>Nose<span>
  <input value="blocked" type="button" onClick="document.symptom.Cold.value='Cold';document.symptom.Influenza.value='Influenza'">
  <input value="runny" type="button" onClick="document.symptom.Cold.value='Cold';document.symptom.Influenza.value='Influenza'">
  <input value="sneezing" type="button" onClick="document.symptom.Cold.value='Cold';document.symptom.Influenza.value='Influenza'">
  <input value="stuffy" type="button" onClick="document.symptom.Cold.value='Cold';document.symptom.Influenza.value='Influenza'">
</span></p>

<p>Stomach<span>
  <input value="aches" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';document.symptom.Influenza.value='Influenza'">
  <input value="bloating" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="discomfort" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';document.symptom.Influenza.value='Influenza'">
  <input value="loss of appetite" type="button" onClick="document.symptom.GlandularFever.value='Glandular fever'">
  <input value="pains" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';document.symptom.Influenza.value='Influenza'">
  <input value="upset" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';document.symptom.Influenza.value='Influenza'">
</span></p>

<p>Throat<span>
  <input value="mucus cough" type="button" onClick="showTime([acuteBronchitis, asthma]);document.symptom.ViralIllnesses.value='Viral Illnesses';">
  <input value="phlegm cough" type="button" onClick="showTime([acuteBronchitis, asthma]);document.symptom.ViralIllnesses.value='Viral Illnesses';">
  <input value="scratchy" type="button" onClick="document.symptom.Cold.value='Cold'">
  <input value="soreness lasting a few days" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever';document.symptom.ScarletFever.value='Scarlet fever';document.symptom.GlandularFever.value='Glandular fever';document.symptom.Cold.value='Cold';document.symptom.Influenza.value='Influenza'">
  <input value="sputnum cough" type="button" onClick="showTime([acuteBronchitis, allergies]);document.symptom.Influenza.value='Influenza';document.symptom.ViralIllnesses.value='Viral Illnesses';">
</span></p>

<!-- Health condition -->

  <input value="ACE Inhibitors (used to control high blood pressure)" class="media-item" id="ACEInhibitors" type="button" name="ACEInhibitors" />
  <input value="Acute Bronchitis" class="media-item" id="AcuteBronchitis" type="button" name="AcuteBronchitis" />
  <input value="Airway Blockage" class="media-item" id="AirwayBlockage" type="button" name="AirwayBlockage" />
  <input value="Allergies" class="media-item" id="Allergies" type="button" name="Allergies" />
  <input value="Asthma" class="media-item" id="Asthma" type="button" name="Asthma" />
  <input value="Bronchitis" class="media-item" id="Bronchitis" type="button" name="Bronchitis" />
  <input value="Bronchospasm" class="media-item" id="Bronchospasm" type="button" name="Bronchospasm" />
  <input value="Chronic Obstructive Pulmonary Disease" class="media-item" id="ChronicObstructivePulmonaryDisease" type="button" name="ChronicObstructivePulmonaryDisease" />
  <input value="" type="button" name="Cold" />
  <input value="" type="button" name="GastroesophagealRefluxDisease" />
  <input value="" type="button" name="GlandularFever" />
  <input value="" type="button" name="Influenza" />
  <input value="" type="button" name="IrritantDust" />
  <input value="" type="button" name="IrritantFumes" />
  <input value="" type="button" name="IrritantChemicals" />
  <input value="" type="button" type="button" name="LungDamage" />
  <input value="" type="button" name="Monkeypox" />
  <input value="" type="button" name="POTS" />
  <input value="" type="button" name="Pneumonia" />
  <input value="" type="button" name="RheumaticFever" />
  <input value="" type="button" name="ScarletFever" />
  <input value="" type="button" name="Tuberculosis" />
  <input value="" type="button" name="ViralIllnesses" />

</form>

<script src="script.js"></script>
