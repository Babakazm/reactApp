import react, {useState} from 'react';

function BmiCalculator() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmiValue, setBMI] = useState(null);

    const calculateBMI = (e) =>{
        e.preventDefault();

        if (weight >0 && height >0){
            const bmiValue = (weight/((height/100)**2)).toFixed(2);
            setBMI (bmiValue);

        }
    };


    return(
    <div>
        <h2>BMI Calculator</h2>
        <form onSubmit = {calculateBMI}>
            <div>
                <label>Height (cm): </label>
                <input type = 'number' value = {height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div>
                <label>weight (kg)</label>
                <input type = 'number' value = {weight} onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <button type = 'submit'>Calculate</button>
        </form>
        {bmiValue &&(
            <>
            {bmiValue < 18.5 && <p>Your BMI is: {bmiValue}. You are underweighted</p>}
            {bmiValue >= 18.5 && bmiValue < 24.9 && <p>Your BMI is: {bmiValue}. You are normal</p>}
            {bmiValue >= 25 && bmiValue < 29.9 && <p>Your BMI is: {bmiValue}. You are overweighted</p>}
            {bmiValue >= 30 && bmiValue < 34.5 && <p>Your BMI is: {bmiValue}. You are class I obese</p>}
            {bmiValue >= 35 && bmiValue < 39.9 && <p>Your BMI is: {bmiValue}. You are class II obese</p>}
            {bmiValue >= 40 && <p>Your BMI is: {bmiValue}. You are class III obese</p>}
            </>
        )}
        </div>
    );

}
export default BmiCalculator;