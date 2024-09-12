/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-xs mb-2">
            © 2024 Profit's Day. All Rights Reserved.
          </p>
          <p className="text-[10px] leading-tight max-w-2xl mx-auto">
            Descargo de Responsabilidad: Este producto no garantiza la obtención de resultados. 
            Las referencias al desempeño de una determinada estrategia no garantiza la obtención de resultados. 
            Las referencias al desempeño de una determinada estrategia no debe ser interpretada como una garantía de resultados. 
            Esta página no es parte de la página de Meta o de Meta, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}