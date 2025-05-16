import React from 'react'


const AuthorInfo = ({ author }) => {
  return (
    <div className="flex items-center gap-4 mt-8">
      <div>
        <p className="font-semibold">{author.name}</p>
        <p className="text-sm text-gray-600">{author.bio}</p>
      </div>
    </div>
  );
}

export default AuthorInfo