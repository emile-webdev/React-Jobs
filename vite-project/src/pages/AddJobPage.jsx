import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJobPage = ({ addJobSubmit }) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('Full-Time');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('Under $50K');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newJob = {
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone,
            },
        };

        addJobSubmit(newJob);
        toast.success('Job added successfully');

        return navigate('/jobs');
    }

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={submitForm}>
                        <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>
                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Job Type</label>
                            <select 
                                className="border rounded w-full py-2 px-3" 
                                name="type" 
                                id="type" 
                                required
                                value={type}
                                onChange={(e) => setType(e.target.value)}>
                                    <option value="Full-Time">Full Time</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Internship">Internship</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Job Listing Name</label>
                            <input
                                className="border rounded w-full py-2 px-3 mb-2" 
                                type="text"
                                id="title"
                                name="title"
                                placeholder="eg. Beautiful apartment in Miami"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2" 
                                htmlFor="description">
                                    Description
                            </label>
                            <textarea 
                                className="border rounded w-full py-2 px-3"
                                name="description" 
                                id="description" 
                                rows="4"
                                placeholder="Add any job duties, expectations, requirements etc."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}>
                            </textarea>
                        </div>
                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="type">
                                    Salary
                            </label>
                            <select 
                                className="border rounded w-full py-2 px-3"
                                name="salary" 
                                id="salary"
                                required
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}>
                                    <option value="Under $50K">Under $50K</option>
                                    <option value="$50K - $60K">$50K - $60K</option>
                                    <option value="$60K - $70K">$60K - $70K</option>
                                    <option value="$70K - $80K">$70K - $80K</option>
                                    <option value="$80K - $90K">$80K - $90K</option>
                                    <option value="$90K - $100K">$90K - $100K</option>
                                    <option value="$100K - $125K">$100K - $125K</option>
                                    <option value="$125K - $150K">$125K - $150K</option>
                                    <option value="$150K - $175K">$150K - $175K</option>
                                    <option value="$175K - $200K">$175K - $200K</option>
                                    <option value="Over $200K">Over $200K</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 font-bold mb-2">
                                    Location
                            </label>
                            <input 
                                className="border rounded w-full py-2 px-3 mb-2"
                                type="text"
                                id="location"
                                name="location" 
                                placeholder="Company Location"
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <h3 className="text-2xl mb-5">Company Info</h3>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2" 
                                htmlFor="company">
                                    Company Name
                            </label>
                            <input 
                                className="border rounded w-full py-2 px-3"
                                type="text"
                                id="company" 
                                name="company"
                                placeholder="Company Name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2" 
                                htmlFor="company_description">
                                    Company Description
                            </label>
                            <textarea 
                                className="border rounded w-full py-2 px-3"
                                name="company_description" 
                                id="company-description"  
                                rows="4"
                                placeholder="What does your company do?"
                                value={companyDescription}
                                onChange={(e) => setCompanyDescription(e.target.value)}>
                            </textarea>
                        </div>
                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="contact_email">
                                    Contact Email
                            </label>
                            <input 
                                className="border rounded w-full py-2 px-3"
                                type="email"
                                name="contact_email"
                                id="contact_email"
                                placeholder="Email address for applicants"
                                required
                                value={contactEmail}
                                onChange={(e) => setContactEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="contact_phone">
                                    Contact Phone
                            </label>
                            <input 
                                className="border rounded w-full py-2 px-3"
                                type="tel" 
                                name="contact_phone"
                                id="contact_phone"
                                placeholder="Optional phone for applicants" 
                                value={contactPhone}
                                onChange={(e) => setContactPhone(e.target.value)}
                            />
                        </div>
                        <div>
                            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-full w-full focus:outline-none focus:shadow-outline" type="submit">
                                Add Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddJobPage