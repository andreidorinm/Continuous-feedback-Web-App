import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} />
          <Route path="/activities" component={ActvityScreen} />
          <Route path="/feedback" component={FeedbackScreen} />
          <Route path="/student" component={StudentScreen} />
          <Route path="/professor" component={ProfessorScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
