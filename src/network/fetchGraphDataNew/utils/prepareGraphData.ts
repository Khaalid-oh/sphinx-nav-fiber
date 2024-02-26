import { Vector3 } from 'three'
import { EdgeNew, NodeExtendedNew, NodeNew } from '../types'

const universeScale = 5000
const padding = 300

const topicCube = {
  scale: universeScale / 2,
  position: {
    x: 0,
    y: 0,
    z: padding,
  },
}

export const customCube = {
  scale: universeScale / 2,
  position: {
    x: universeScale / 2,
    y: 0,
    z: 0,
  },
}

function generateTopicNodePosition() {
  const { scale, position } = topicCube

  const center = {
    x: position.x + Math.random() * scale - scale * 0.5,
    y: position.y + Math.random() * scale - scale * 0.5,
    z: position.z + Math.random() * scale - scale * 0.5,
  }

  const perlinNoise = 1

  const amp = 10

  return new Vector3(center.x + perlinNoise * amp, center.y + perlinNoise * amp, center.z + perlinNoise * amp)
}

export const generateSplitGraphPositions = (nodes: NodeNew[], edges: EdgeNew[]) => {
  // sort parent then children

  const mappedNodes: NodeExtendedNew[] = []

  const updatedNodes: NodeExtendedNew[] = nodes.map((node: NodeNew) => {
    let position = new Vector3(0, 0, 0)

    if (node.node_type === 'Topic') {
      position = generateTopicNodePosition()
    }

    const updated = {
      ...node,
      ...position,
    }

    mappedNodes.push(updated)

    return updated
  })

  const links = edges.map((i) => {
    const sourceNode = updatedNodes.find((f) => f.ref_id === i.source)
    const targetNode = updatedNodes.find((f) => f.ref_id === i.target)

    const sourcePosition = new Vector3(sourceNode?.x || 0, sourceNode?.y || 0, sourceNode?.z || 0)
    const targetPosition = new Vector3(targetNode?.x || 0, targetNode?.y || 0, targetNode?.z || 0)

    return {
      edge_type: i.edge_type,
      attributes: i.attributes,
      source: i.source,
      target: i.target,
      sourcePosition,
      targetPosition,
    }
  })

  return { nodes: updatedNodes, links }
}
