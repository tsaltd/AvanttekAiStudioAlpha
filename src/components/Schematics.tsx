import React from 'react';

export const CentralizedHubSpokeSvg: React.FC = () => {
  const center = { x: 160, y: 110 };
  const spokes = [
    { x: 60, y: 50, label: 'Node 1' },
    { x: 260, y: 50, label: 'Node 2' },
    { x: 60, y: 170, label: 'Node 3' },
    { x: 260, y: 170, label: 'Node 4' },
  ];

  return (
    <svg
      viewBox="0 0 320 220"
      className="w-full h-44 my-4"
      aria-hidden="true"
      role="presentation"
    >
      {/* Spoke connection lines */}
      {spokes.map((spoke, idx) => (
        <line
          key={`spoke-line-${idx}`}
          x1={center.x}
          y1={center.y}
          x2={spoke.x}
          y2={spoke.y}
          stroke="#5B6470"
          strokeWidth="2.5"
          strokeDasharray="4 4"
        />
      ))}

      {/* Spoke outer nodes */}
      {spokes.map((spoke, idx) => (
        <g key={`spoke-node-${idx}`}>
          <circle
            cx={spoke.x}
            cy={spoke.y}
            r="18"
            fill="#FAF7F4"
            stroke="#5B6470"
            strokeWidth="2"
          />
          <circle
            cx={spoke.x}
            cy={spoke.y}
            r="6"
            fill="#E4503A"
          />
        </g>
      ))}

      {/* Central Hub Node */}
      <circle
        cx={center.x}
        cy={center.y}
        r="32"
        fill="#E4503A"
        stroke="#FFFFFF"
        strokeWidth="3"
        className="filter drop-shadow-sm"
      />
      <text
        x={center.x}
        y={center.y + 5}
        fill="#FFFFFF"
        fontSize="12"
        fontWeight="700"
        textAnchor="middle"
        letterSpacing="0.05em"
      >
        HUB
      </text>
    </svg>
  );
};

export const DecentralizedMeshSvg: React.FC = () => {
  const nodes = [
    { x: 235, y: 110 },
    { x: 198, y: 175 },
    { x: 122, y: 175 },
    { x: 85, y: 110 },
    { x: 122, y: 45 },
    { x: 198, y: 45 },
  ];

  // Generate all pairs of connections
  const connections: Array<[number, number]> = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      connections.push([i, j]);
    }
  }

  return (
    <svg
      viewBox="0 0 320 220"
      className="w-full h-44 my-4"
      aria-hidden="true"
      role="presentation"
    >
      {/* Mesh lines between all nodes */}
      {connections.map(([i, j], idx) => (
        <line
          key={`mesh-line-${idx}`}
          x1={nodes[i].x}
          y1={nodes[i].y}
          x2={nodes[j].x}
          y2={nodes[j].y}
          stroke="#5B6470"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
      ))}

      {/* Peer Nodes */}
      {nodes.map((node, idx) => (
        <g key={`mesh-node-${idx}`}>
          <circle
            cx={node.x}
            cy={node.y}
            r="16"
            fill="#E4503A"
            stroke="#FFFFFF"
            strokeWidth="2.5"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r="5"
            fill="#FFFFFF"
          />
        </g>
      ))}
    </svg>
  );
};
