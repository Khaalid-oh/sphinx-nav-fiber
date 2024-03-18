import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force-3d'
import { EdgeExtendedNew, NodeExtendedNew } from '~/network/fetchGraphDataNew/types'

export type ForceSimulation = typeof forceSimulation

const simulation: ForceSimulation = forceSimulation().stop()

type SimulationProps = {
  numDimensions?: 2 | 3
  velocityDecay?: number
  forceChargeStrength?: number
  forceChargeMinDistance?: number
  forceChargeMaxDistance?: number
  forceLinkStrength?: number
  forceCenterStrength?: number
  forceLinkDistanceMethod?: (link: { source: NodeExtendedNew; target: NodeExtendedNew }) => void
  forceCollideRadiusMethod?: (node: NodeExtendedNew) => void
  disableCollide?: boolean
  disableCenter?: boolean
  disableLink?: boolean
  disableCharge?: boolean
}

const defaults: Required<SimulationProps> = {
  numDimensions: 3,
  velocityDecay: 0.9,
  forceChargeStrength: -20,
  forceChargeMinDistance: 150,
  forceChargeMaxDistance: 8000,
  forceLinkStrength: 0.04,
  forceCenterStrength: 0.85,
  disableCollide: false,
  disableCenter: false,
  disableLink: false,
  disableCharge: false,
  forceCollideRadiusMethod: (n: NodeExtendedNew) => ((n.edge_count || 1) + 20) * 6 + 200,
  forceLinkDistanceMethod: () => 150,
}

export const runForceSimulation = (
  nodes: NodeExtendedNew[],
  links: EdgeExtendedNew[],
  {
    numDimensions = defaults.numDimensions,
    velocityDecay = defaults.velocityDecay,
    forceChargeStrength = defaults.forceChargeStrength,
    forceChargeMinDistance = defaults.forceChargeMinDistance,
    forceChargeMaxDistance = defaults.forceChargeMaxDistance,
    forceLinkStrength = defaults.forceLinkStrength,
    forceCenterStrength = defaults.forceCenterStrength,
    forceLinkDistanceMethod = defaults.forceLinkDistanceMethod,
    forceCollideRadiusMethod = defaults.forceCollideRadiusMethod,
    disableCollide = defaults.disableCollide,
    disableCenter = defaults.disableCenter,
    disableLink = defaults.disableLink,
    disableCharge = defaults.disableCharge,
  }: SimulationProps,
) => {
  simulation
    .alpha(1)
    .stop()
    .numDimensions(numDimensions)
    .velocityDecay(velocityDecay)
    .force('collide', disableCollide ? null : forceCollide().radius(forceCollideRadiusMethod).iterations(1))
    .force('center', disableCenter ? null : forceCenter().strength(forceCenterStrength))
    .force(
      'charge',
      disableCharge
        ? null
        : forceManyBody()
            .strength(forceChargeStrength)
            .distanceMin(forceChargeMinDistance)
            .distanceMax(forceChargeMaxDistance),
    )
    .nodes(nodes)
    .force(
      'link',
      disableLink
        ? null
        : forceLink()
            .distance(forceLinkDistanceMethod)
            .strength(forceLinkStrength)
            .id((d: NodeExtendedNew) => d.ref_id),
    )
    .alpha(1)
    .restart()

  return simulation
}
