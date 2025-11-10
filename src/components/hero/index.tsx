/**
 * Interface defining the props accepted by the `Hero` component.
 */
interface IHeroProps {
  /**
   * The name of the superhero to be displayed.
   */
  name: string;

  /**
   * (Optional) The hero's power level or strength indicator.
   * If not provided, it will be omitted from the rendered output.
   */
  power?: number;
}

/**
 * A presentational component that displays superhero information.
 * 
 * This component receives the hero's `name` and optionally a `power` value,
 * and renders them inside a heading element.
 * 
 * @param {IHeroProps} props - The props for the `Hero` component.
 * @returns {JSX.Element} A JSX element representing the hero information.
 */
const Hero = ({ name, power }: IHeroProps): JSX.Element => {
  return (
    <h1>
      Superhero: "{name}" {power ? ` - Power: ${power}` : null}
    </h1>
  )
}

export default Hero
