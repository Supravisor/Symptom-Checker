
<link href="./styles.css" rel="stylesheet" />

<p>Click on the button below which matches the symptom or symptoms you may be experiencing.</p>
<p>In the section at the bottom of the page a cell may populate with the health issues that may match the symptom.</p>

<form name="symptom">

<!-- Symptom -->

<p>Abdomen<span>
  <input value="skin rash" type="button" onClick="showTime(['Scarlet_fever'])">
  </span></p>

<p>Arms<span>
  <input value="skin rash" type="button" onClick="showTime(['Scarlet_fever']);">
</span></p>

<p>Body<span>
  <input value="body aches" type="button" onClick="showTime(['Influenza', 'Monkeypox'])">
  <input value="body pains" type="button" onClick="showTime(['Influenza']);">
  <input value="fever" type="button" onClick="showTime(['Acute_bronchitis', 'Glandular_fever', 'Influenza']);">
  <input value="high fever" type="button" onClick="showTime(['Influenza', 'Pneumonia']);">
  <input value="joint pain" type="button" onClick="showTime(['Glandular_fever', 'Rheumatic_fever']);">
  <input value="lesion anywhere" type="button" onClick="showTime(['Monkeypox'])">
  <input value="muscle twitches" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="rash anywhere" type="button" onClick="showTime(['Monkeypox']);">
  <input value="red skin rash" type="button" onClick="showTime(['Scarlet_fever']);">
  <input value="shaking body" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="skin rash" type="button" onClick="showTime(['Scarlet_fever']);">
  <input value="sweating excessively" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="temperature of 37C" type="button" onClick="showTime(['Cold']);">
  <input value="temperature above 37C" type="button" onClick="showTime(['Influenza']);">
  <input value="temperature above 39C" type="button" onClick="showTime(['Influenza', 'Rheumatic_fever']);">
</span></p>

<p>Chest<span>
  <input value="chest discomfort" type="button" onClick="showTime(['Acute_bronchitis', 'Postural_orthostatic_tachycardia_syndrome']);">
  <input value="chest pain" type="button" onClick="showTime(['Acute_bronchitis', 'Postural_orthostatic_tachycardia_syndrome']);">
  <input value="skin rash" type="button" onClick="showTime(['Scarlet_fever']);">
</span></p>

<p>Digestive system<span>
  <input value="constipation" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="diarrhoea" type="button" onClick="showTime(['Influenza', 'Postural_orthostatic_tachycardia_syndrome']);">
  <input value="irritable bowel syndrome" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
</span></p>

<p>Ears<span>
  <input value="ache" type="button" onClick="showTime(['Rheumatic_fever']);">
  <input value="blocked" type="button" onClick="showTime(['Cold']);">
  <input value="sound sensitivity" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
</span></p>

<p>Eyes<span>
  <input value="blurred vision" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="light sensitivity" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="tunnel vision" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="watery" type="button" onClick="showTime(['Cold']);">
</span></p>

<p>Face<span>
  <input value="lesion" type="button" onClick="showTime(['Monkeypox']);">
  <input value="rash" type="button" onClick="showTime(['Monkeypox']);">
</span></p>

<p>Feelings<span>
  <input value="almost fainting" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="anxiety" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="chills" type="button" onClick="showTime(['Influenza', 'Monkeypox', 'Pneumonia']);">
  <input value="dizziness" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="fainting" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="fatigue" type="button" onClick="showTime(['Acute_bronchitis', 'Monkeypox', 'Postural_orthostatic_tachycardia_syndrome']);">
  <input value="feeling extremely cold" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="feeling extremely hot" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="loss of energy for longer than a few weeks" type="button" onClick="showTime(['Glandular_fever', 'Postural_orthostatic_tachycardia_syndrome']);">
  <input value="nausea" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="sleeping difficulty" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="tiredness" type="button" onClick="showTime(['Cold', 'Glandular_fever', 'Postural_orthostatic_tachycardia_syndrome']);">
  <input value="unwell for longer than a few weeks" type="button" onClick="showTime(['Glandular_fever', 'Postural_orthostatic_tachycardia_syndrome']);">
</span></p>

<p>Feet<span>
  <input value="tingling feet" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="walking long distance is difficult" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
</span></p>

<p>Hands<span>
  <input value="lesion" type="button" onClick="showTime(['Monkeypox']);">
  <input value="rash" type="button" onClick="showTime(['Monkeypox']);">
  <input value="tingling hands" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
</span></p>

<p>Head<span>
  <input value="brain fog" name="brain fog" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="cognitive issues" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="flushed cheeks" type="button" onClick="showTime(['Scarlet_fever']);">
  <input value="headache" type="button" onClick="showTime(['Cold', 'Glandular_fever', 'Influenza', 'Postural_orthostatic_tachycardia_syndrome']);">
  <input value="light headedness" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="migraines" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
</span></p>

<p>Heart<span>
  <input value="heart palpitations" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
</span></p>

<p>Lungs<span>
  <input value="phlegm cough" type="button" onClick="showTime(['Bronchitis', 'Chronic_obstructive_pulmonary_disease', 'Pneumonia', 'Tuberculosis']);">
  <input value="mucus cough" type="button" onClick="showTime(['Bronchitis', 'Chronic_obstructive_pulmonary_disease', 'Pneumonia', 'Tuberculosis']);">
  <input value="sputnum cough" type="button" onClick="showTime(['Bronchitis', 'Chronic_obstructive_pulmonary_disease', 'Pneumonia', Tuberculosis]);">
</span></p>

<p>Mouth<span>
  <input value="a dry cough" type="button" onClick="showTime(['Cold', 'Influenza'])">
  <input value="breathing difficulties" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="coated tonsils" type="button" onClick="showTime(['Rheumatic_fever']);">
  <input value="coughing a sticky mucus" type="button" onClick="showTime(['Acute_bronchitis', 'Asthma']);">
  <input value="coughing stomach acid" type="button" onClick="showTime(['Gastroesophageal_reflux_disease'])">
  <input value="difficulty swallowing" type="button" onClick="showTime(['Rheumatic_fever']);">
  <input value="dry cough lasting a few days" type="button" onClick="showTime(['Airway_blockage', 'Irritant_dust', 'Irritant_fumes', 'Irritant_chemicals']);">
  <input value="dry cough lasting a few weeks" type="button" onClick="showTime(['ACE_inhibitors', 'Asthma', 'Bronchospasm', 'Viral_illnesses']);">
  <input value="enlarged tonsils" type="button" onClick="showTime(['Rheumatic_fever']);">
  <input value="shortness of breath" type="button" onClick="showTime(['Acute_bronchitis', 'Postural_orthostatic_tachycardia_syndrome']);">
  <input value="smokers cough" type="button" onClick="showTime(['Lung_damage']);">
  <input value="tickly cough" type="button" onClick="showTime(['Allergies']);">
  <input value="vomiting" type="button" onClick="showTime(['Influenza']);">
  <input value="wheezing" type="button" onClick="showTime(['Acute_bronchitis']);">
</span></p>

<p>Neck<span>
  <input value="pain" type="button" onClick="showTime(['Rheumatic_fever']);">
  <input value="skin rash" type="button" onClick="showTime(['Scarlet_fever']);">
  <input value="swollen glands" type="button" onClick="showTime(['Glandular_fever']);">
</span></p>

<p>Nose<span>
  <input value="blocked" type="button" onClick="showTime(['Cold', 'Influenza']);">
  <input value="runny" type="button" onClick="showTime(['Cold', 'Influenza']);">
  <input value="sneezing" type="button" onClick="showTime(['Cold', 'Influenza']);">
  <input value="stuffy" type="button" onClick="showTime(['Cold', 'Influenza']);">
</span></p>

<p>Stomach<span>
  <input value="aches" type="button" onClick="showTime(['Influenza', 'Postural_orthostatic_tachycardia_syndrome']);">
  <input value="bloating" type="button" onClick="showTime(['Postural_orthostatic_tachycardia_syndrome']);">
  <input value="discomfort" type="button" onClick="showTime(['Influenza', 'Postural_orthostatic_tachycardia_syndrome']);">
  <input value="loss of appetite" type="button" onClick="showTime(['Glandular_fever']);">
  <input value="pains" type="button" onClick="showTime(['Influenza', 'Postural_orthostatic_tachycardia_syndrome']);">
  <input value="upset" type="button" onClick="showTime(['Influenza', 'Postural_orthostatic_tachycardia_syndrome']);">
</span></p>

<p>Throat<span>
  <input value="mucus cough" type="button" onClick="showTime(['Acute_bronchitis', 'Asthma', 'Viral_illnesses']);">
  <input value="phlegm cough" type="button" onClick="showTime(['Acute_bronchitis', 'Asthma', 'Viral_illnesses']);">
  <input value="scratchy" type="button" onClick="showTime(['Cold']);">
  <input value="soreness lasting a few days" type="button" onClick="showTime(['Glandular_fever', 'Influenza', 'Scarlet_fever', 'Rheumatic_fever']);">
  <input value="sputnum cough" type="button" onClick="showTime(['Acute_bronchitis', 'Allergies', 'Influenza', 'Viral_illnesses']);">
</span></p>

<!-- Health condition -->

<br />
<div id="condition"></div>

<div id="information"></div>

</form>

<script src="script.js"></script>
