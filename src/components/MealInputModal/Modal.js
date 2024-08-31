import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

// Set up your Supabase client
const supabaseUrl = "https://qwhxtyfsbwiwcyemzsub.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3aHh0eWZzYndpd2N5ZW16c3ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwNzE1MDAsImV4cCI6MjA0MDY0NzUwMH0.y-zwrkkULuts7hurqiuDCV0eRByn8YUqd2N8QdD4unE";
const supabase = createClient(supabaseUrl, supabaseKey);


const Modal = (props) => {
  const [suger, setSuger] = useState(0);
  const [fat, setFat] = useState(0);
  const [protein, setProtein] = useState(0);
  const [calorie, setCalorie] = useState(0);

  const closeModal = () => {
    props.setShowModal(false);
  };

  const onSugerChange = (e) => {
    setSuger(e.target.value);
  };

  const onFatChange = (e) => {
    setFat(e.target.value);
  };

  const onProteinChange = (e) => {
    setProtein(e.target.value);
  };

  const onCalorieChange = (e) => {
    setCalorie(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("糖質：", suger);
    console.log("脂質：", fat);
    console.log("タンパク質：", protein);
    console.log("カロリー：", calorie);

    const { error } = await supabase
      .from('meal')
      .insert([
        { suger: suger, fat: fat, protein: protein, calorie: calorie },
      ])
      .select();
  };

  return (
    <>
      {props.showFlag ? (
        <div className="flex mt-auto items-center justify-center bg-gray-200  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-48 p-5 flex-col absolute z-20">
          <button
            onClick={closeModal}
            className="font-medium rounded-md bg-black bg-opacity-50 z-10"
          >
            ✖️
          </button>
          <h1 className="text-xl font-bold mb-5">栄養入力</h1>
          <form onSubmit={onSubmit}>
            <label>
              糖質(g)：
              <input
                type="number"
                min="0"
                value={suger}
                onChange={onSugerChange}
              />
            </label>
            <br />
            <label>
              脂質(g)：
              <input type="number" min="0" value={fat} onChange={onFatChange} />
            </label>
            <br />
            <label>
              タンパク質(g)：
              <input
                type="number"
                min="0"
                value={protein}
                onChange={onProteinChange}
              />
            </label>
            <br />
            <label>
              カロリー(kcal)：
              <input
                type="number"
                min="0"
                value={calorie}
                onChange={onCalorieChange}
              />
            </label>
            <br />
            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              // onClick={closeModal}
            >
              送信
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
