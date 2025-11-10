import { cloneElement, ReactElement } from "react"
import Hero from "./components/hero"

/**
 * The main application component.
 * 
 * This example demonstrates the professional use of React's `cloneElement` function,
 * which allows developers to clone an existing React element and override or extend
 * its props dynamically without mutating the original element.
 */
function App(): JSX.Element {

  /**
   * Base React element of the `Hero` component.
   * This element will be cloned and reused with different props.
   */
  const elementHero: ReactElement = <Hero name="Hulk" />

  return (
    <div>
      {/**
       * Clones the `elementHero` React element and overrides the `name` prop
       * while adding a new `power` prop.
       * 
       * This creates a new independent element with the specified modifications.
       */}
      {cloneElement(elementHero, { name: 'Batman', power: 100 })}

      {/**
       * Another example of cloning the same base element,
       * this time modifying the `name` and `power` props to represent Superman.
       */}
      {cloneElement(elementHero, { name: 'Superman', power: 500 })}
    </div>
  )
}

export default App
