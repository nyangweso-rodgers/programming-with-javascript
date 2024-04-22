import "../globals.css";
import BlogHeader from './Common/Header/BlogHeader/BlogHeader';
import SurveyFormHeader from "./Common/Header/SurveyFormHeader/SurveyFormHeader";
import ExhibitorsSurveyForm from "../Components/Forms/SurveyFormTemplate/ExhibitorsSurveyForm/ExhibitorsSurveyForm"
import ContactForm from "./Forms/ContactForm/ContactForm";
import FooterTemplate from "./Common/Footer/FooterTemplate/FooterTemplate";
//import Footer from "./Common/Footer/Footer";

const App = () => {
  return (
    <>
      <SurveyFormHeader />
      <FooterTemplate />
    </>
  );
};

export default App;
