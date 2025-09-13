import HeaderLogo from '../assets/investment-calculator-logo.png';

export default function Header() {
  const logo = HeaderLogo;

  return (
    <header id="header">
      <img src={HeaderLogo} alt="Investment Calculator" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
