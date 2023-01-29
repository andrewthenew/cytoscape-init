export const data = {
  nodes: [
    { data: { id: '0', label: '0' }, position: { x: 270, y: 180 } },

    { data: { id: '1', label: '1' }, position: { x: 340, y: 120 } },
    { data: { id: '2', label: '2' }, position: { x: 200, y: 120 } },
    { data: { id: '3', label: '3' }, position: { x: 200, y: 250 } },
    { data: { id: '4', label: '4' }, position: { x: 340, y: 250 } },

    { data: { id: '5', label: '5' }, position: { x: 120, y: 340 } },
    { data: { id: '6', label: '6' }, position: { x: 270, y: 340 } },

    { data: { id: '7', label: '7' }, position: { x: 420, y: 340 } },
    { data: { id: '8', label: '8' }, position: { x: 440, y: 200 } },
  ],
  edges: [
    {data: { source: '0', target: '1', label: '0 - 1' }},
    {data: { source: '0', target: '2', label: '0 - 2' }},
    {data: { source: '0', target: '3', label: '0 - 3' }},
    {data: { source: '0', target: '4', label: '0 - 4' }},

    {data: { source: '3', target: '5', label: '3 - 5' }},
    {data: { source: '3', target: '6', label: '3 - 6' }},

    {data: { source: '4', target: '7', label: '4 - 7' }},
    {data: { source: '4', target: '8', label: '4 - 8' }},
  ]
};
