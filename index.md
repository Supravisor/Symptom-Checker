
<link href="./styles.css" rel="stylesheet" />

<p>Click on the button below which matches the symptom or symptoms you may be experiencing.</p>
<p>In the section at the bottom of the page a cell may populate with the health issues that may match the symptom.</p>

<form name="symptom">

<!-- Symptom -->

<p>Abdomen<span>
  <input value="skin rash" type="button" onClick="showTime(['ScarletFever'])">
  </span></p>

<p>Arms<span>
  <input value="skin rash" type="button" onClick="showTime(['ScarletFever']);">
</span></p>

<p>Body<span>
  <input value="body aches" type="button" onClick="showTime(['Influenza', 'Monkeypox'])">
  <input value="body pains" type="button" onClick="showTime(['Influenza']);">
  <input value="fever" type="button" onClick="showTime(['AcuteBronchitis', 'GlandularFever', 'Influenza']);">
  <input value="high fever" type="button" onClick="showTime(['Influenza', 'Pneumonia']);">
  <input value="joint pain" type="button" onClick="showTime(['GlandularFever', 'RheumaticFever']);">
  <input value="lesion anywhere" type="button" onClick="showTime(['Monkeypox'])">
  <input value="muscle twitches" type="button" onClick="showTime(['POTS']);">
  <input value="rash anywhere" type="button" onClick="showTime(['Monkeypox']);">
  <input value="red skin rash" type="button" onClick="showTime(['ScarletFever']);">
  <input value="shaking body" type="button" onClick="showTime(['POTS']);">
  <input value="skin rash" type="button" onClick="showTime(['ScarletFever']);">
  <input value="sweating excessively" type="button" onClick="showTime(['POTS']);">
  <input value="temperature of 37C" type="button" onClick="showTime(['Cold']);">
  <input value="temperature above 37C" type="button" onClick="showTime(['Influenza']);">
  <input value="temperature above 39C" type="button" onClick="showTime(['Influenza', 'RheumaticFever']);">
</span></p>

<p>Chest<span>
  <input value="chest discomfort" type="button" onClick="showTime(['AcuteBronchitis', 'POTS']);">
  <input value="chest pain" type="button" onClick="showTime(['AcuteBronchitis', 'POTS']);">
  <input value="skin rash" type="button" onClick="showTime(['ScarletFever']);">
</span></p>

<p>Digestive system<span>
  <input value="constipation" type="button" onClick="showTime(['POTS']);">
  <input value="diarrhoea" type="button" onClick="showTime(['Influenza', 'POTS']);">
  <input value="irritable bowel syndrome" type="button" onClick="showTime(['POTS']);">
</span></p>

<p>Ears<span>
  <input value="ache" type="button" onClick="showTime(['RheumaticFever']);">
  <input value="blocked" type="button" onClick="showTime(['Cold']);">
  <input value="sound sensitivity" type="button" onClick="showTime(['POTS']);">
</span></p>

<p>Eyes<span>
  <input value="blurred vision" type="button" onClick="showTime(['POTS']);">
  <input value="light sensitivity" type="button" onClick="showTime(['POTS']);">
  <input value="tunnel vision" type="button" onClick="showTime(['POTS']);">
  <input value="watery" type="button" onClick="showTime(['Cold']);">
</span></p>

<p>Face<span>
  <input value="lesion" type="button" onClick="showTime(['Monkeypox']);">
  <input value="rash" type="button" onClick="showTime(['Monkeypox']);">
</span></p>

<p>Feelings<span>
  <input value="almost fainting" type="button" onClick="showTime(['POTS']);">
  <input value="anxiety" type="button" onClick="showTime(['POTS']);">
  <input value="chills" type="button" onClick="showTime(['Influenza', 'Monkeypox', 'Pneumonia']);">
  <input value="dizziness" type="button" onClick="showTime(['POTS']);">
  <input value="fainting" type="button" onClick="showTime(['POTS']);">
  <input value="fatigue" type="button" onClick="showTime(['AcuteBronchitis', 'Monkeypox', 'POTS']);">
  <input value="feeling extremely cold" type="button" onClick="showTime(['POTS']);">
  <input value="feeling extremely hot" type="button" onClick="showTime(['POTS']);">
  <input value="loss of energy for longer than a few weeks" type="button" onClick="showTime(['GlandularFever', 'POTS']);">
  <input value="nausea" type="button" onClick="showTime(['POTS']);">
  <input value="sleeping difficulty" type="button" onClick="showTime(['POTS']);">
  <input value="tiredness" type="button" onClick="showTime(['Cold', 'GlandularFever', 'POTS']);">
  <input value="unwell for longer than a few weeks" type="button" onClick="showTime(['GlandularFever', 'POTS']);">
</span></p>

<p>Feet<span>
  <input value="tingling feet" type="button" onClick="showTime(['POTS']);">
  <input value="walking long distance is difficult" type="button" onClick="showTime(['POTS']);">
</span></p>

<p>Hands<span>
  <input value="lesion" type="button" onClick="showTime(['Monkeypox']);">
  <input value="rash" type="button" onClick="showTime(['Monkeypox']);">
  <input value="tingling hands" type="button" onClick="showTime(['POTS']);">
</span></p>

<p>Head<span>
  <input value="brain fog" name="brain fog" type="button" onClick="showTime(['POTS']);">
  <input value="cognitive issues" type="button" onClick="showTime(['POTS']);">
  <input value="flushed cheeks" type="button" onClick="showTime(['ScarletFever']);">
  <input value="headache" type="button" onClick="showTime(['Cold', 'GlandularFever', 'Influenza', 'POTS']);">
  <input value="light headedness" type="button" onClick="showTime(['POTS']);">
  <input value="migraines" type="button" onClick="showTime(['POTS']);">
</span></p>

<p>Heart<span>
  <input value="heart palpitations" type="button" onClick="showTime(['POTS']);">
</span></p>

<p>Lungs<span>
  <input value="phlegm cough" type="button" onClick="showTime(['Bronchitis', 'ChronicObstructivePulmonaryDisease', 'Pneumonia', 'Tuberculosis']);">
  <input value="mucus cough" type="button" onClick="showTime(['Bronchitis', 'ChronicObstructivePulmonaryDisease', 'Pneumonia', 'Tuberculosis']);">
  <input value="sputnum cough" type="button" onClick="showTime(['Bronchitis', 'ChronicObstructivePulmonaryDisease', 'Pneumonia', Tuberculosis]);">
</span></p>

<p>Mouth<span>
  <input value="a dry cough" type="button" onClick="showTime(['Cold', 'Influenza'])">
  <input value="breathing difficulties" type="button" onClick="showTime(['POTS']);">
  <input value="coated tonsils" type="button" onClick="showTime(['RheumaticFever']);">
  <input value="coughing a sticky mucus" type="button" onClick="showTime(['AcuteBronchitis', 'Asthma']);">
  <input value="coughing stomach acid" type="button" onClick="showTime(['GastroesophagealRefluxDisease'])">
  <input value="difficulty swallowing" type="button" onClick="showTime(['RheumaticFever']);">
  <input value="dry cough lasting a few days" type="button" onClick="showTime(['AirwayBlockage', 'IrritantDust', 'IrritantFumes', 'IrritantChemicals']);">
  <input value="dry cough lasting a few weeks" type="button" onClick="showTime(['ACEInhibitors', 'Asthma', 'Bronchospasm', 'ViralIllnesses']);">
  <input value="enlarged tonsils" type="button" onClick="showTime(['RheumaticFever']);">
  <input value="shortness of breath" type="button" onClick="showTime(['AcuteBronchitis', 'POTS']);">
  <input value="smokers cough" type="button" onClick="showTime(['LungDamage']);">
  <input value="tickly cough" type="button" onClick="showTime(['Allergies']);">
  <input value="vomiting" type="button" onClick="showTime(['Influenza']);">
  <input value="wheezing" type="button" onClick="showTime(['AcuteBronchitis']);">
</span></p>

<p>Neck<span>
  <input value="pain" type="button" onClick="showTime(['RheumaticFever']);">
  <input value="skin rash" type="button" onClick="showTime(['ScarletFever']);">
  <input value="swollen glands" type="button" onClick="showTime(['GlandularFever']);">
</span></p>

<p>Nose<span>
  <input value="blocked" type="button" onClick="showTime(['Cold', 'Influenza']);">
  <input value="runny" type="button" onClick="showTime(['Cold', 'Influenza']);">
  <input value="sneezing" type="button" onClick="showTime(['Cold', 'Influenza']);">
  <input value="stuffy" type="button" onClick="showTime(['Cold', 'Influenza']);">
</span></p>

<p>Stomach<span>
  <input value="aches" type="button" onClick="showTime(['Influenza', 'POTS']);">
  <input value="bloating" type="button" onClick="showTime(['POTS']);">
  <input value="discomfort" type="button" onClick="showTime(['Influenza', 'POTS']);">
  <input value="loss of appetite" type="button" onClick="showTime(['GlandularFever']);">
  <input value="pains" type="button" onClick="showTime(['Influenza', 'POTS']);">
  <input value="upset" type="button" onClick="showTime(['Influenza', 'POTS']);">
</span></p>

<p>Throat<span>
  <input value="mucus cough" type="button" onClick="showTime(['AcuteBronchitis', 'Asthma', 'ViralIllnesses']);">
  <input value="phlegm cough" type="button" onClick="showTime(['AcuteBronchitis', 'Asthma', 'ViralIllnesses']);">
  <input value="scratchy" type="button" onClick="showTime(['Cold']);">
  <input value="soreness lasting a few days" type="button" onClick="showTime(['GlandularFever', 'Influenza', 'ScarletFever', 'RheumaticFever']);">
  <input value="sputnum cough" type="button" onClick="showTime(['AcuteBronchitis', 'Allergies', 'Influenza', 'ViralIllnesses']);">
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
  <input value="Cold" class="media-item" id="Cold" type="button" name="Cold" />
  <input value="Gastroesophageal Reflux Disease" class="media-item" id="GastroesophagealRefluxDisease" type="button" name="GastroesophagealRefluxDisease" />
  <input value="Glandular Fever" class="media-item" id="GlandularFever" type="button" name="GlandularFever" />
  <input value="Influenza" class="media-item" id="Influenza" type="button" name="Influenza" />
  <input value="Irritant (dust)" class="media-item" id="IrritantDust" type="button" name="IrritantDust" />
  <input value="Irritant (fumes)" class="media-item" id="IrritantFumes" type="button" name="IrritantFumes" />
  <input value="Irritant (chemicals)" class="media-item" id="IrritantChemicals" type="button" name="IrritantChemicals" />
  <input value="Lung damage" class="media-item" id="LungDamage" type="button" type="button" name="LungDamage" />
  <input value="Monkeypox" class="media-item" id="Monkeypox" type="button" name="Monkeypox" />
  <input value="Postural orthostatic tachycardia syndrome" class="media-item" id="POTS" type="button" name="POTS" />
  <input value="Pneumonia" class="media-item" id="Pneumonia" type="button" name="Pneumonia" />
  <input value="Rheumatic Fever" class="media-item" id="RheumaticFever" type="button" name="RheumaticFever" />
  <input value="Scarlet Fever" class="media-item" id="ScarletFever" type="button" name="ScarletFever" />
  <input value="Tuberculosis" class="media-item" id="Tuberculosis" type="button" name="Tuberculosis" />
  <input value="Viral Illnesses" class="media-item" id="ViralIllnesses" type="button" name="ViralIllnesses" />

</form>

<script src="script.js"></script>
