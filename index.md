
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
  <input value="body aches" type="button" onClick="showTime([influenza]);document.symptom.Monkeypox.value='Monkeypox'">
  <input value="body pains" type="button" onClick="showTime([influenza]);">
  <input value="fever" type="button" onClick="showTime(['AcuteBronchitis', glandularFever, influenza]);">
  <input value="high fever" type="button" onClick="document.symptom.Pneumonia.value='Pneumonia';showTime([influenza]);">
  <input value="joint pain" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever';showTime([glandularFever]);">
  <input value="lesion anywhere" type="button" onClick="document.symptom.Monkeypox.value='Monkeypox'">
  <input value="muscle twitches" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="rash anywhere" type="button" onClick="document.symptom.Monkeypox.value='Monkeypox'">
  <input value="red skin rash" type="button" onClick="showTime(['ScarletFever']);">
  <input value="shaking body" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="skin rash" type="button" onClick="showTime(['ScarletFever']);">
  <input value="sweating excessively" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="temperature of 37C" type="button" onClick="showTime([cold]);">
  <input value="temperature above 37C" type="button" onClick="showTime([influenza]);">
  <input value="temperature above 39C" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever';showTime([influenza]);">
</span></p>

<p>Chest<span>
  <input value="chest discomfort" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime(['AcuteBronchitis']);">
  <input value="chest pain" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime(['AcuteBronchitis']);">
  <input value="skin rash" type="button" onClick="showTime(['ScarletFever']);">
</span></p>

<p>Digestive system<span>
  <input value="constipation" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="diarrhoea" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime([influenza]);">
  <input value="irritable bowel syndrome" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
</span></p>

<p>Ears<span>
  <input value="ache" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever'">
  <input value="blocked" type="button" onClick="showTime([cold]);">
  <input value="sound sensitivity" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
</span></p>

<p>Eyes<span>
  <input value="blurred vision" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="light sensitivity" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="tunnel vision" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="watery" type="button" onClick="showTime([cold]);">
</span></p>

<p>Face<span>
  <input value="lesion" type="button" onClick="document.symptom.Monkeypox.value='Monkeypox'">
  <input value="rash" type="button" onClick="document.symptom.Monkeypox.value='Monkeypox'">
</span></p>

<p>Feelings<span>
  <input value="almost fainting" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="anxiety" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="chills" type="button" onClick="document.symptom.Pneumonia.value='Pneumonia';showTime([influenza]);document.symptom.Monkeypox.value='Monkeypox'">
  <input value="dizziness" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="fainting" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="fatigue" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime(['AcuteBronchitis']);document.symptom.Monkeypox.value='Monkeypox'">
  <input value="feeling extremely cold" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="feeling extremely hot" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="loss of energy for longer than a few weeks" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime([glandularFever]);">
  <input value="nausea" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="sleeping difficulty" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="tiredness" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime([cold, glandularFever]);">
  <input value="unwell for longer than a few weeks" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime([glandularFever]);">
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
  <input value="flushed cheeks" type="button" onClick="showTime(['ScarletFever']);">
  <input value="headache" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime([cold, glandularFever, influenza]);">
  <input value="light headedness" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="migraines" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
</span></p>

<p>Heart<span>
  <input value="heart palpitations" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
</span></p>

<p>Lungs<span>
  <input value="phlegm cough" type="button" onClick="showTime([bronchitis, chronicObstructivePulmonaryDisease]);document.symptom.Pneumonia.value='Pneumonia';document.symptom.Tuberculosis.value='Tuberculosis';">
  <input value="mucus cough" type="button" onClick="showTime([bronchitis]);document.symptom.Pneumonia.value='Pneumonia';document.symptom.Tuberculosis.value='Tuberculosis';showTime([chronicObstructivePulmonaryDisease]);">
  <input value="sputnum cough" type="button" onClick="showTime([bronchitis]);document.symptom.Pneumonia.value='Pneumonia';document.symptom.Tuberculosis.value='Tuberculosis';showTime([chronicObstructivePulmonaryDisease]);">
</span></p>

<p>Mouth<span>
  <input value="a dry cough" type="button" onClick="showTime([cold, influenza])">
  <input value="breathing difficulties" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="coated tonsils" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever'">
  <input value="coughing a sticky mucus" type="button" onClick="showTime(['AcuteBronchitis', asthma]);">
  <input value="coughing stomach acid" type="button" onClick="showTime([gastroesophagealRefluxDisease])">
  <input value="difficulty swallowing" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever'">
  <input value="dry cough lasting a few days" type="button" onClick="document.symptom.IrritantDust.value='Irritant (dust)';document.symptom.IrritantFumes.value='Irritant (fumes)';document.symptom.IrritantChemicals.value='Irritant (chemicals)';showTime(['AirwayBlockage']);">
  <input value="dry cough lasting a few weeks" type="button" onClick="document.symptom.ViralIllnesses.value='Viral illnesses';showTime([bronchospasm]);document.symptom.ViralIllnesses.value='Viral illnesses';showTime(['ACEInhibitors']);document.symptom.Asthma.value='Asthma'">
  <input value="enlarged tonsils" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever'">
  <input value="shortness of breath" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime(['AcuteBronchitis']);">
  <input value="smokers cough" type="button" onClick="document.symptom.LungDamage.value='Lung damage'">
  <input value="tickly cough" type="button" onClick="showTime([allergies]);">
  <input value="vomiting" type="button" onClick="showTime([influenza]);">
  <input value="wheezing" type="button" onClick="showTime(['AcuteBronchitis']);">
</span></p>

<p>Neck<span>
  <input value="pain" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever'">
  <input value="skin rash" type="button" onClick="showTime(['ScarletFever']);">
  <input value="swollen glands" type="button" onClick="showTime([glandularFever]);">
</span></p>

<p>Nose<span>
  <input value="blocked" type="button" onClick="showTime([cold, influenza]);">
  <input value="runny" type="button" onClick="showTime([cold, influenza]);">
  <input value="sneezing" type="button" onClick="showTime([cold, influenza]);">
  <input value="stuffy" type="button" onClick="showTime([cold, influenza]);">
</span></p>

<p>Stomach<span>
  <input value="aches" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime([influenza]);">
  <input value="bloating" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome'">
  <input value="discomfort" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime([influenza]);">
  <input value="loss of appetite" type="button" onClick="showTime([glandularFever]);">
  <input value="pains" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime([influenza]);">
  <input value="upset" type="button" onClick="document.symptom.POTS.value='Postural orthostatic tachycardia syndrome';showTime([influenza]);">
</span></p>

<p>Throat<span>
  <input value="mucus cough" type="button" onClick="showTime(['AcuteBronchitis', asthma]);document.symptom.ViralIllnesses.value='Viral Illnesses';">
  <input value="phlegm cough" type="button" onClick="showTime(['AcuteBronchitis', asthma]);document.symptom.ViralIllnesses.value='Viral Illnesses';">
  <input value="scratchy" type="button" onClick="document.symptom.Cold.value='Cold'">
  <input value="soreness lasting a few days" type="button" onClick="document.symptom.RheumaticFever.value='Rheumatic fever';showTime([glandularFever, influenza, 'ScarletFever']);">
  <input value="sputnum cough" type="button" onClick="showTime(['AcuteBronchitis', allergies, influenza]);document.symptom.ViralIllnesses.value='Viral Illnesses';">
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
  <input value="" type="button" name="IrritantDust" />
  <input value="" type="button" name="IrritantFumes" />
  <input value="" type="button" name="IrritantChemicals" />
  <input value="" type="button" type="button" name="LungDamage" />
  <input value="" type="button" name="Monkeypox" />
  <input value="" type="button" name="POTS" />
  <input value="" type="button" name="Pneumonia" />
  <input value="" type="button" name="RheumaticFever" />
  <input value="Scarlet Fever" id="ScarletFever" class="media-item" type="button" name="ScarletFever" />
  <input value="" type="button" name="Tuberculosis" />
  <input value="" type="button" name="ViralIllnesses" />

</form>

<script src="script.js"></script>
