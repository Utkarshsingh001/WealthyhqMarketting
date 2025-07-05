import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp, Calendar } from 'lucide-react';

const WealthCalculator: React.FC = () => {
  const [initialAmount, setInitialAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(8);
  const [years, setYears] = useState(20);
  const [result, setResult] = useState({
    futureValue: 0,
    totalContributions: 0,
    totalEarnings: 0,
  });

  useEffect(() => {
    calculateWealth();
  }, [initialAmount, monthlyContribution, annualReturn, years]);

  const calculateWealth = () => {
    const monthlyRate = annualReturn / 100 / 12;
    const totalMonths = years * 12;
    
    // Future value of initial amount
    const futureValueInitial = initialAmount * Math.pow(1 + monthlyRate, totalMonths);
    
    // Future value of monthly contributions (annuity)
    const futureValueContributions = monthlyContribution * 
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
    
    const futureValue = futureValueInitial + futureValueContributions;
    const totalContributions = initialAmount + (monthlyContribution * totalMonths);
    const totalEarnings = futureValue - totalContributions;

    setResult({
      futureValue: Math.round(futureValue),
      totalContributions: Math.round(totalContributions),
      totalEarnings: Math.round(totalEarnings),
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mb-4">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wealth Calculator
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover your wealth potential with our advanced calculator. 
            See how consistent investing can grow your financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <DollarSign className="h-6 w-6 mr-2 text-blue-600" />
              Investment Parameters
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Initial Investment
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={initialAmount}
                    onChange={(e) => setInitialAmount(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Contribution
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Annual Return (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    step="0.1"
                  />
                  <span className="absolute right-3 top-3 text-gray-500">%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Period (Years)
                </label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-green-600" />
              Projected Results
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="text-sm text-green-700 mb-2">Total Portfolio Value</div>
                <div className="text-3xl font-bold text-green-800">
                  {formatCurrency(result.futureValue)}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="text-sm text-blue-700 mb-2">Total Contributions</div>
                  <div className="text-xl font-bold text-blue-800">
                    {formatCurrency(result.totalContributions)}
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="text-sm text-purple-700 mb-2">Total Earnings</div>
                  <div className="text-xl font-bold text-purple-800">
                    {formatCurrency(result.totalEarnings)}
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <div className="flex items-center text-sm text-amber-700 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  Investment Growth
                </div>
                <div className="text-lg font-semibold text-amber-800">
                  {((result.totalEarnings / result.totalContributions) * 100).toFixed(1)}% Total Return
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800 leading-relaxed">
                <strong>Disclaimer:</strong> This calculation is for illustrative purposes only. 
                Actual returns may vary based on market conditions, fees, and other factors. 
                Past performance does not guarantee future results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WealthCalculator;