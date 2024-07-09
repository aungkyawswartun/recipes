import React from 'react'

export default function Home() {
  return (
    <div className="p-5 bg-[#f1f1f1] h-screen space-y-3">
      <div className="p-3 bg-white rounded-2xl space-y-3">
        <h3 className="text-xl font-bold text-orange-400">Title</h3>
        <p>description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          facilis suscipit alias nisi maiores! Repellendus accusamus maxime
          blanditiis nesciunt odio sequi aliquid. Optio fuga sit velit, nam
          voluptas accusantium eveniet!
        </p>
        <div className="space-x-2">
          <span>Ingredients -</span>
          <span className="bg-orange-400 text-white px-2 py-1 text-sm rounded-full">
            ingre
          </span>
          <span className="bg-orange-400 text-white px-2 py-1 text-sm rounded-full">
            dients
          </span>
        </div>
        <div>
          <span>Published at - 1 year ago</span>
        </div>
      </div>
      <div className="p-3 bg-white rounded-2xl space-y-3">
        <h3 className="text-xl font-bold text-orange-400">Title</h3>
        <p>description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          facilis suscipit alias nisi maiores! Repellendus accusamus maxime
          blanditiis nesciunt odio sequi aliquid. Optio fuga sit velit, nam
          voluptas accusantium eveniet!
        </p>
        <div className="space-x-2">
          <span>Ingredients -</span>
          <span className="bg-orange-400 text-white px-2 py-1 text-sm rounded-full">
            ingre
          </span>
          <span className="bg-orange-400 text-white px-2 py-1 text-sm rounded-full">
            dients
          </span>
        </div>
        <div>
          <span>Published at - 1 year ago</span>
        </div>
      </div>
    </div>
  );
}
