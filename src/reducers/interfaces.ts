import { BlockCoordinates, Grid } from '../typings'

export interface Reducer {
  challengeGrid?: Grid
  selectedBlock?: BlockCoordinates
  solvedGrid?: Grid
  workingGrid?: Grid
}
