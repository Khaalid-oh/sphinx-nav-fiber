import { Segment as DreiSegment, Line, SegmentObject } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { QuadraticBezierCurve3, Vector3 } from 'three'
import { NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { Link } from '~/types'

type Props = {
  link: Link
  animated?: boolean
}

export const Segment = ({ link, animated }: Props) => {
  const ref = useRef<SegmentObject | null>(null)
  const selectedNode = useSelectedNode()
  const [start, setStart] = useState(new Vector3(0, 0, 0))
  const [end, setEnd] = useState(new Vector3(0, 0, 0))
  const [color, setColor] = useState(0x888888)
  const selectionGraphData = useDataStore((s) => s.selectionGraphData)

  useEffect(() => {
    // const refId = selectedNode?.ref_id || ''
    // const linkIsSelected = selectedNode && (refId === link.targetRef || refId === link.sourceRef)

    setStart(new Vector3(link.sourcePosition?.x || 0, link.sourcePosition?.y || 0, link.sourcePosition?.z || 0))
    setEnd(new Vector3(link.targetPosition?.x || 0, link.targetPosition?.y || 0, link.targetPosition?.z || 0))
    setColor(NODE_RELATIVE_HIGHLIGHT_COLORS.children.segmentColor)
    // if (!link.onlyVisibleOnSelect || linkIsSelected) {
    //   setStart(new Vector3(link.sourcePosition?.x || 0, link.sourcePosition?.y || 0, link.sourcePosition?.z || 0))
    //   setEnd(new Vector3(link.targetPosition?.x || 0, link.targetPosition?.y || 0, link.targetPosition?.z || 0))
    // } else {
    //   setStart(new Vector3(0, 0, 0))
    //   setEnd(new Vector3(0, 0, 0))
    // }

    // if (linkIsSelected) {
    //   setColor(link.color || NODE_RELATIVE_HIGHLIGHT_COLORS.children.segmentColor)
    // } else if (selectedNode) {
    //   setColor(0x555555)
    // } else {
    //   setColor(0x888888)
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode, link])

  const controlPoint = new Vector3(0, 1, 0) // Adjust this point to control the curvature

  const curve = new QuadraticBezierCurve3(start, controlPoint, end)
  const points = curve.getPoints(50)

  useFrame(() => {
    if (animated && ref.current) {
      const source = selectionGraphData.nodes.find((f) => f.ref_id === link.sourceRef)
      const target = selectionGraphData.nodes.find((f) => f.ref_id === link.targetRef)

      ref.current.start.set(source?.x || 0, source?.y || 0, source?.z || 0)
      ref.current.end.set(target?.x || 0, target?.y || 0, target?.z || 0)
    }
  })

  return true ? (
    <Line color="white" opacity={0.1} points={points.map((p) => p.toArray())} transparent />
  ) : (
    <DreiSegment ref={ref} color={'0xFFFFFF' || color} end={end} scale={20} start={start} />
  )
}
