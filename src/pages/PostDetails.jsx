import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { useProjects } from '../hooks/useProject';
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { Button } from '@headlessui/react';
import './dos.css'

export const PostDetails = () => {
    const { projectId } = useParams();
    const { findByIdProject, isFetching, projects } = useProjects();

    useEffect(() => {
        findByIdProject(projectId);
    }, [projectId]); 
    
    const project = projects.find(proj => proj._id === projectId);

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-8/12 px-4 mb-8">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vhtduqyJenzBGpJg5x2icg46efIAeK7AtyL5uskqMQ&s" className="w-full h-64 object-cover rounded" />
                        {project && (
                            <>
                                <h2 className="text-4xl font-bold mt-4 mb-2">{project.title}</h2>
                                <p className="text-description">{project.description}</p>
                                <a href={project.code} className="Get-project"><Button> Obtener Proyecto</Button></a>

                            </>
                        )}

                    </div>
                    <div className="bg">
                        <div className="sss">
                            <h3 className="Contenedor-categorias">Categorias</h3>
                            <ul className="lista-categorias">
                                <li><a href="/taller" className="taller-class">Taller</a></li>
                                <li><a href="/tegnologia" className="tegnologia">Tegnologia</a></li>
                                <li><a href="/practicasupervisada" className="Supervisada">Practica Supervisada</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
