const questions1 = [
    "What type of economy would Country A be if the government authority passed down economic decisions?",
    "What is private enterprise?",
    "Which of the following is the best example of a goods and services market transaction?",
    "Country A has a heavily regulated economy where transactions are made without government approval or knowledge. What is this economy called?",
    "Two countries are transitioning from heavily regulated command economies. Country A allows most prices to be set by private markets, but still provides free healthcare and education. Country B allows free enterprise, but all business transactions must be recorded and taxed by the government. Which best describes the economic classification of both countries?",
    "What is the primary goal of both fiscal and monetary policy?",
    "Kevin has a weekly budget of $30 and must spend it on cookies and gas. Each cookie is $1, while each gallon of gas is $5. Which of the following is a valid combination based on Kevin’s budget?",
    "The owner of a patisserie buys ingredients for a new cake on the menu. However, nobody ends up buying the cake, and the cake goes bad. What is this an example of?",
    "Eric is trying to decide how to allocate his $24 weekend budget between tea lattes ($4 each) and movie tickets ($8 each). From experience, he estimates his marginal utility (MU) from each additional unit of good below:",
    "Kai spends his afternoon playing Valorant. Which of the following represents the opportunity cost of this activity?",
    "As society begins to become more environmentally aware, companies begin to switch from plastic to paper straws. What is this an example of?",
    "If China can produce semiconductors at a lower opportunity cost than India, what is this an example of?",
    "Suppose the equilibrium wage for a type of labor is $10/hour, with 1,000 hours of labor demanded and supplied. The government enacts a minimum wage of $14/hour, which reduces the hours of labor demanded to 700. However, the total number of hours supplied is 1200. What is the deadweight loss in terms of lost mutually beneficial trades?",
    "Consider Figure A, which represents the supply and demand of some product. If the substitute item’s price of that product goes up, what gets affected and why?",
    "Find Figure A, a supply and demand graph with a price ceiling below the equilibrium. What is the effect of this action?",
    "Imagine that Figure A represents your business, and there is a rise in input prices. How does the price and quantity supplied get affected?",
    "Find Figure A, and imagine there is a price floor above the equilibrium. How are consumers, producers, and social surplus affected?",
    "Price controls can create all except:",
    "Find Figure A and imagine it is a labor market graph for software engineers. If AI can do most of their work, which of the following represents a possible shift and in which direction?",
    "A drought causes a 30% reduction in the cocoa harvest worldwide. Chocolate bar prices triple in 3 months. A local chocolatier, unaware of the drought, chooses to delay purchasing more inventory, thinking the price will fall back soon. They are forced to shut down after missing several restocking cycles. What economic principle best explains why this chocolatier failed to adapt?",
    "What is intertemporal decision making, and how is it related to interest rates?",
    "What are usury laws, and if possible, what is one way firms overcome them?",
    "What is one way that price controls affect the economy?",
    "What is a factor that will not shift the supply curve of labor?",
    "A gym lowers its monthly membership fee from $60 to $50, and as a result, the number of active memberships rises from 1,200 to 1,500. What is the price elasticity of demand for the gym membership?"
  ];
  
  const choices1 = [
    ["A) Command Economy", "B) Traditional Economy", "C) Communist Economy", "D) Market Economy"],
    ["A) A system where private individuals or groups of private individuals own and operate means of production", "B) A system where the government owns and operates the means of production for public benefit", "C) A system where public individuals or groups of public individuals own and operate means of production", "D) None of the above"],
    ["A) Minh gets 40 chicken nuggets as a gift from his mother", "B) Carson pays the government in taxes because he has a job working at Apple", "C) Arsh buys a new monitor from Amazon", "D) Amazon pays Kai for working a 40-hour shift"],
    ["A) Free-Market Economy", "B) Underground Economy", "C) Mixed Economy", "D) Command Economy"],
    ["A) Country A is a pure market economy; Country B is still a command economy.", "B) Country A is a mixed economy; Country B is a traditional economy.", "C) Country A is a mixed economy; Country B is a market economy with regulatory oversight.", "D) Country A is transitioning to a traditional economy; Country B is a mixed economy."],
    ["A) Reduce interest rates", "B) Reduce the trade balance", "C) Maintaining the exchange rate", "D) Controlling inflation"],
    ["A) 20 gallons of gas and 2 cookies", "B) 4 gallons of gas and 15 cookies", "C) 30 gallons of gas and 0 cookies", "D) 5 gallons of gas and 5 cookies"],
    ["A) Sunk cost", "B) Opportunity cost", "C) Marginal cost", "D) Avoidable fixed cost"],
    ["A) 3 tea lattes, 1 movie ticket", "B) 2 tea lattes, 2 movie tickets", "C) 4 tea lattes, 0 movie tickets", "D) 0 tea lattes, 3 movie tickets"],
    ["A) Kai could have worked on his Macroeconomics notes", "B) Kai could have worked a shift at his job at McDonald's", "C) Kai could have played basketball with his friends", "D) All of the above"],
    ["A) Allocative Efficiency", "B) Productive Efficiency", "C) Marginal Analysis", "D) Opportunity Set"],
    ["A) Absolute advantage", "B) Comparative advantage", "C) Resource advantage", "D) Economic advantage"],
    ["A) 200 hours", "B) 300 hours", "C) 400 hours", "D) 500 hours"],
    ["A) Demand shifts right because now, more people will buy this product", "B) Supply shifts right because there will be more demand for this product", "C) Supply shifts left because there will be less competition", "D) Demand shifts left because now, more people will buy the substitute item"],
    ["A) There will be a surplus of the product", "B) There will be a shortage of the product", "C) The economy goes into a recession", "D) There is no effect"],
    ["A) Both price and quantity supplied increase", "B) Price decreases while quantity supplied increases", "C) Price increases while quantity supplied decreases", "D) Both price and quantity supplied decrease"],
    ["A) Consumer surplus remains unchanged, while producer and social surplus increase", "B) Consumer surplus decreases, while producer surplus increases, and social surplus is unchanged", "C) Consumer surplus increases, while producer surplus decreases, and social surplus is unchanged", "D) Consumer surplus decreases, while producer surplus increases, and social surplus decreases overall"],
    ["A) Shortages", "B) Surpluses", "C) Equilibrium", "D) Higher demand for substitute goods"],
    ["A) Supply shifts left", "B) Supply shifts right", "C) Demand shifts right", "D) Demand shifts left"],
    ["A) They misunderstood the elasticity of demand for chocolate and overreacted.", "B) They ignored the market price signals that reflect underlying scarcity.", "C) The market’s price ceiling distorted the true cost of cocoa.", "D) They misunderstood the comparative advantage of importing from dry regions."],
    ["A) It is a strategy politicians use to control the financial market using interest rates", "B) It is a strategy where firms try to optimize their demand and supply curves to make the most profit, lowering rates", "C) It is a strategy where individuals decide whether to consume goods now or in the future, and interest rates may impact those decisions", "D) None of the above explains intertemporal decision making and its relationship with interest rates"],
    ["A) They are laws that restrict the maximum interest rate on loans, and firms can overcome them by charging fees instead of interest", "B) They are laws that implement either a price ceiling or a floor, and firms overcome them by lobbying", "C) They are laws that protect the consumer from malicious firm practices, and firms can’t overcome them", "D) They are laws that make supply and demand sticky so that they barely shift, and firms can overcome them by setting a price floor above the equilibrium"],
    ["A) It gives consumers and firms more information about changes in the economy", "B) It makes tracking the economy harder", "C) It gives only consumers more information about changes in the economy", "D) Price controls do not affect the economy"],
    ["A) Number of workers", "B) Required education", "C) Changes in wage", "D) Government policies"],
    ["A) 1.22 (Elastic)", "B) -2.44 (Elastic)", "C) 0.82 (Inelastic)", "D) 2.44 (Elastic)"]
  ];

  const questions2 = [
    "Which of the following inequalities can be used to define an inelastic product?",
    "At $12/piece, customers of a bakery demand 105 croissants. A week later, the bakery drops the price to $9/piece, resulting in 150 croissants being demanded. Calculate the price elasticity of demand.",
    "What does a constant unitary elasticity supply curve and demand curve look like?",
    "Gasoline is an example of which type of elasticity in the short run, and in the long run, in most markets for goods and services, which will move more than the other, prices or quantities?",
    "If the amount of matcha demanded rises from 25 to 35 units, and the price goes from $20 to $30, the demand for matcha is considered:",
    "For each group, identify the dominant unemployment type:\n\ni) Boba Barista - furloughed after a sudden pandemic squeeze in retail sales, but their skills still match open jobs.\n\nii) Fracking Laborer - the mining sites are becoming more automated; employers now want robotic-fracking certifications.\n\niii) Quantitative Trader - goes on sabbatical; left firm voluntarily, interviewing at other local firms",
    "Calculate GDP.",
    "Calculate the Real GDP of 1970 and compare it to the Real GDP of 1960.",
    "Kai’s cat grooming business had the following profits over the last 4 years. Which of the following best describes this table?",
    "Which of the following elements is part of the Standard of Living, but not the GDP?",
    "The country Arshveeria adds to its GDP the market value of all goods at every stage of production. What could this lead to?",
    "When the CPI overstates inflation because shoppers switch from expensive city potatoes to cheaper country potatoes after the city potato price jumps, the distortion is called:",
    "What is the rule of law, and what relationship does it have to contractual rights?",
    "If Country A has a GDP of $500 billion and an annual GDP growth of 3%, what will the GDP be in 25 years?",
    "A high-income country struggles to increase its annual GDP growth, while a low-income country is experiencing high GDP growth. Why is the high-income country experiencing that problem, and how can it overcome it?",
    "If Country A builds higher-level education facilities and existing factories upgrade their machinery, how is their GDP affected?",
    "Which of the following statements accurately supports convergence?",
    "Calculate the unemployment rate if a country has a population of 1 million, with 594K employed people and 113K unemployed people.",
    "Carson works at Apple Park as a product designer, requiring him to be on-site. However, due to certain circumstances, he decides to buy and live in a house in Morgan Hill; because of this, he cannot commute to work and gets fired. What type of unemployment best represents this scenario?",
    "Which of the following is the theory in which an employer tries to keep wages from falling when the business is doing poorly, and in return, the employees will not expect huge salary increases when the business is doing well?",
    "In the year 2030, Sarthak has a PhD in Computer Science. However, Minh has created an AI computer that is perfectly accurate and makes no mistakes. Due to this, demand for Sarthak’s skills declined, but fortunately, Kai was able to help him get a job at Carson’s McDonald’s. What best describes Sarthak’s situation?",
    "Which person would be considered unemployed?",
    "Which of the following is a part of the Consumer Price Index (CPI), but not the Core Inflation Index?",
    "Calculate the inflation of the price of a PS5 if it were $500 last year and $576 this year.",
    "What is one reason why an inflation rate calculated using a fixed basket of goods tends to overstate the true rise in the cost of living over time?"
  ];
  
  const choices2 = [
    ["A) change in quantity < change in price", "B) change in quantity ≥ change in price", "C) change in quantity = change in price", "D) change in quantity > change in price"],
    ["A) 1.24", "B) 0.81", "C) 0.82", "D) 1.25"],
    ["A) Both supply and demand are curved", "B) Both supply and demand are linear", "C) Supply is linear while demand is curved", "D) Supply is curved while demand is linear"],
    ["A) Infinite elasticity and prices will change more in the long run than quantities", "B) Perfect elasticity and quantities will change more in the long run than prices", "C) Zero elasticity and prices will change more in the long run than quantities", "D) Perfect inelasticity and quantities will change more in the long run than prices"],
    ["A) Elastic", "B) Inelastic", "C) Unitary", "D) Linear"],
    ["A) Cyclical, Structural, Frictional", "B) Structural, Cyclical, Frictional", "C) Cyclical, Frictional, Structural", "D) Frictional, Structural, Cyclical"],
    ["A) $2.3 Trillion", "B) $3.05 Trillion", "C) $2 Trillion", "D) $2.15 Trillion"],
    ["A) $503.2 billion, which is almost 1.5x that of the 1960s’ real GDP", "B) $731.5 billion, which is almost 2x that of the 1960s’ real GDP", "C) $730.8 billion, which is almost 2x that of the 1960s’ real GDP", "D) $732.2 billion, which is almost 2x that of the 1960s’ real GDP"],
    ["A) It represents a business cycle, with 2018 being the trough and 2020 being the peak", "B) It represents an economic recession affecting the business’s profits", "C) It represents a business cycle, with 2018 being the peak and 2020 being the trough", "D) It represents an economic depression affecting the business’s profits"],
    ["A) Goods that have been produced but have not yet been sold", "B) The total services present in an economy", "C) The production of long-lasting technologies, such as cars or refrigerators", "D) The technology and products available in the market"],
    ["A) An understated GDP, as intermediate goods are of lower cost", "B) A more accurate representation of its GDP", "C) An overstated GDP due to double counting", "D) Higher supply of goods"],
    ["A) Base-year bias", "B) Substitution bias", "C) Quality/New-goods bias", "D) Core Inflation bias"],
    ["A) Making laws that allow individuals to use their property as they see fit, and contractual rights protect businesses from bankruptcy in cases tied to property contracts", "B) Having a legal system for economic growth, and it has no relationship with contractual rights", "C) Having a civil system for ethical economic growth, and contractual rights allow people to have contracts for leasing their property to firms", "D) Making laws that protect individuals’ rights to use their property as they see fit, and contractual rights are an example of the rule of law"],
    ["A) $1.05 trillion", "B) $1.04 trillion", "C) $1.03 trillion", "D) $1.02 trillion"],
    ["A) The country is experiencing the law of diminishing returns and can overcome it by capital deepening", "B) The country is experiencing the law of diminishing returns and can overcome it by improvements in technology", "C) The country is experiencing convergence of national returns and can overcome it by capital deepening", "D) The country is experiencing convergence of national returns, and there is no way to overcome it"],
    ["A) GDP should increase by a considerable amount", "B) GDP should decrease by a considerable amount", "C) Through this capital deepening, GDP would decrease, as more money is spent on achieving those tasks than on making new products", "D) This does not affect GDP"],
    ["A) New technology can provide a way for an economy to avoid diminishing marginal returns", "B) A society’s improvement performance is guaranteed by technology", "C) Low-income countries can improve their technology by applying technology that has already been invented", "D) Low-income countries might not have the opportunities to follow high-income countries"],
    ["A) 16%", "B) 84%", "C) 20%", "D) 11%"],
    ["A) Situational unemployment", "B) Natural unemployment", "C) Structural unemployment", "D) Frictional unemployment"],
    ["A) Efficiency wage theory", "B) Relative wage coordination argument", "C) Adverse selection of wage cuts argument", "D) Implicit contract"],
    ["A) He is a hidden worker because it is hard for others to know of his skills", "B) He is an inefficient worker because his skills could be put to better use for society", "C) He is a discouraged worker because his skills have been replaced, and he now works for a lower wage", "D) He is underemployed because he is employed in a job that is below his skills"],
    ["A) Arsh, who is busy with school, has no time for a job", "B) Carson, who is too old to work", "C) Sarthak, who can’t find a job, but hasn’t given up", "D) Kai, who is working part-time, but wants to find a full-time job"],
    ["A) Education", "B) Healthcare services", "C) Food and drinks", "D) Cars"],
    ["A) 17.9%", "B) 15.2%", "C) 12.7%", "D) 13.2%"],
    ["A) It includes very volatile goods, such as energy, leading to an overall inflated index", "B) It fails to take into account that people have the option to substitute a good that is out of their price range", "C) Changes in exchange rates between other countries can result in import price fluctuations, leading to an overall inflated index", "D) It uses Nominal GDP instead of Real GDP to make the calculations, which can inflate the index"]
  ];
  
  const questions3 = [
    "Which of the following is an example of an indexing arrangement in government programs?",
    "Recall and use the national saving and investment identity to solve for savings by individuals and firms if the trade deficit is $657K, private sector investment is $892K, government spending is $923K, and taxes collected are $713K.",
    "The U.S. government donates $50 million in fracking equipment to its friends in the north, Canada, with no payment expectations in return. Which of the following will this be booked as?",
    "If the government was demanding financial capital, which component would be larger than the other in the national saving and investment identity?\nS + (M - X) = I + (G - T)",
    "Which of the following does not strongly influence a nation’s level of trade?",
    "Country A’s domestic investment goes up due to an economic upswing. How does the trade deficit get affected?",
    "What effect would a recession have on the trade balance of a country?",
    "Which of the following is the correct term for a macroeconomic perspective that believes supply is the most important factor in determining the size of the macroeconomy?",
    "Which of the following pairs best captures the core difference between Say’s and Keynes’s laws?",
    "Which of the following best describes full-employment GDP?",
    "The US economy is thriving, and outside investor confidence is high. Which of the following best describes the effects on aggregate demand?",
    "The government launches a one-year spending surge that raises aggregate demand by 5%, while wages are slow to adjust. Which of the following sequences best models the short-run and long-run adjustments?",
    "After WWI, Germany’s economy experienced hyperinflation due to the loss of the war. Which of the following zones is the economy in, and which is not a concern for the economy in the short run?",
    "What would occur if our GDP is past the LRAS?",
    "Which of the following is most characteristic of the Keynesian AD/AS model as aggregate demand increases?",
    "Arsh suspects that the demand for graphic designers is declining, believing there will soon be a lower demand for them in a market where existing employees make high salaries. Which of the following is likely to happen, assuming Arsh’s prediction is true?",
    "Consider an economy that has an inflation rate of 5% and an unemployment rate of 7%. In the following weeks, the rate of inflation increases to 7%. Which of the following ranges could represent a possible unemployment rate for the economy?",
    "Which of the following ideas is the foundation of the Keynesian macroeconomic perspective?",
    "Which of the following is NOT a reason for sticky wages/prices?",
    "Country A is in a recession and is thinking of implementing expansionary policies to combat unemployment, but just to be safe, they ask a Neoclassical economist. What would the Neoclassical economist say?",
    "The neoclassical Phillips curve represents which of the following concepts?",
    "Which of the following ideas best represents the foundation of the Neoclassical perspective?",
    "What is a Neoclassical perspective on government intervention?",
    "If Country A’s government cuts taxes, what will shift, and how will prices be affected?",
    "Calculate the M1 money supply."
  ];
  
  const choices3 = [
    ["A) A Flat tax rate", "B) An Increase in military spending every year", "C) Social Security increases with the CPI", "D) Adjustable-rate mortgages"],
    ["A) $25K", "B) $87K", "C) $333K", "D) $445K"],
    ["A) A capital outflow, since physical assets left the country", "B) A credit in the merchandise trade balance, since equipment crossed borders", "C) A debit in the current account under unilateral transfers", "D) No entry; only commercial exports and imports are collected"],
    ["A) I > S", "B) G > T", "C) T > G", "D) S > I"],
    ["A) The size of its economy", "B) Its geographic location in the world", "C) Its history of trade with other nations", "D) Its availability of natural resources"],
    ["A) The trade deficit is unaffected", "B) The trade deficit must go down", "C) The trade deficit must also go up", "D) The trade deficit will go up initially, but after some time, come back to where it was"],
    ["A) Does not affect trade", "B) Trade deficit increases", "C) Trade deficit decreases", "D) Does affect trade, but creates no change in the trade balance"],
    ["A) Keynes’ perspective", "B) Neoclassical perspective", "C) Says’ perspective", "D) Keynesian perspective"],
    ["A) Say: Output drives income → spending adjusts, Keynes: Money supply drives prices → output adjusts", "B) Say: Production capacity limits GDP, Keynes: Aggregate demand limits GDP", "C) Say: Investment demands govern savings, Keynes: Savings govern investment demands", "D) Say: Government spending multiplies output, Keynes: Fiscal policy is neutral in the long run"],
    ["A) It refers to a GDP value that would be achieved if there was no unemployment", "B) It refers to an economy that is producing near its potential, with low unemployment and no inflation", "C) It refers to an economy that is producing at its potential, and unemployment is at the natural rate of unemployment", "D) It refers to an economy that is producing at its equilibrium, resulting in a low unemployment rate"],
    ["A) There is no effect on consumption or government spending", "B) Investment spending increases, but there is no effect on government spending", "C) Investment spending and domestic exports increase", "D) Consumption and investment spending increase"],
    ["A) Real GDP ↑, Price level ↑ / SRAS shifts right; GDP returns to potential, price level falls below the original", "B) Real GDP ↑, Price level ↑ / SRAS shifts left; GDP returns to potential, price level ends higher than the original", "C) Real GDP unchanged, Price level ↑ / AD shifts back left; GDP falls below potential, price level returns to original", "D) Real GDP ↑, Price level unchanged / LRAS shifts right; GDP stays above old potential, price level unchanged"],
    ["A) Keynesian Zone; inflationary pressure", "B) Neoclassical Zone; high cyclical unemployment", "C) Neoclassical Zone; low cyclical unemployment", "D) Intermediate Zone; recession"],
    ["A) Excess Supply", "B) Overstated Supply/Demand", "C) Inflation", "D) Deflation"],
    ["A) Any increase in AD results in a higher price level", "B) No changes in price level in the short run, but switches to no change in real GDP in the long run", "C) No changes in real GDP in the short run, but switches to no change in price level in the long run", "D) Any increase in AD results in a higher real GDP"],
    ["A) Efficiency wage theory holds that graphic designers will be paid more to increase productivity for companies", "B) Implicit contract holds that graphic designers will maintain employment even if their company profits are declining", "C) Coordination argument holds that graphic designers will be paid less to stabilize the market", "D) Sticky wages hold that graphic designers will be let go as the economy adjusts"],
    ["A) (2%, 5%)", "B) (7%, 9%)", "C) (7%, 100%)", "D) (5%, 9%)"],
    ["A) A change in AD affects AS in every economic transaction, and sticky wages/prices increase aggregate demand over time", "B) AD cannot be high enough by itself to incentivize employees to find jobs and increase employment, and sticky wages/prices cause large shifts in aggregate demand", "C) AD cannot be high enough by itself to incentivize employees to find jobs and increase employment, and sticky wages/prices cause very unpredictable but slow shifts in aggregate demand", "D) AD cannot be high enough by itself to incentivize firms to reach full employment, and sticky wages/prices cause slow shifts in aggregate demand"],
    ["A) Menu costs", "B) Consumer preferences are changing", "C) Coordination Argument", "D) Frequent price changes may leave customers confused or angry"],
    ["A) He would not care, as he is for the change", "B) He would be for the idea because, in the long run, the shift in aggregate demand will decrease prices", "C) He would be against the idea because, in the long run, the shift in aggregate demand will increase prices", "D) He would be for the idea because, in the long run, the shift in aggregate demand will increase real GDP"],
    ["A) Regardless of the inflation rate, the unemployment rate will be the same", "B) There is a direct relationship between inflation and unemployment", "C) There is an inverse relationship between inflation and unemployment", "D) Regardless of the unemployment rate, the inflation rate will be the same"],
    ["A) Full employment GDP determines the size of the economy, and inflation determines if wages and prices are flexible over the long term", "B) Unemployment rates will adjust to the natural rate of unemployment, and supply is more important than demand in determining the size of the economy", "C) Potential GDP determines the size of the economy, and wages and prices are flexible over the long term", "D) Government policies only affect inflation, and do not affect short-term unemployment"],
    ["A) The government should be active in changing demand", "B) Needs to manage inflation in the short run", "C) Should try not to be involved as the economy will correct itself in the long run", "D) Should heavily intervene to improve things in the long run"],
    ["A) AD shifts left, and prices will decrease", "B) AD shifts right, and prices will increase", "C) LRAS shifts left, and prices will increase", "D) LRAS shifts right, and prices will decrease"],
    ["A) $1.796 trillion", "B) $1.315 trillion", "C) $1.105 trillion", "D) $1.165 trillion"]
  ];
  
  const questions4 = [
    "Calculate the M2 money supply.",
    "Assuming the required reserve ratio is 10%, what is the maximum additional amount of new loans this bank can make safely without acquiring extra reserves?",
    "Arsh found $1 million while digging in his backyard, and he immediately deposited the money in his bank. How much will the M1 money supply increase if banks only have to hold a 5% reserve?",
    "If a bank has $1 million in reserves, $9 million in loans, owes $10 million to depositors, and has $2 million in bonds, what is its net worth?",
    "If velocity is 6.78 and nominal GDP is $29.18 trillion, what is the money supply?",
    "The interest rate in a country is 10%, and consumer spending is $3.79 trillion. If an expansionary monetary policy is introduced, which of the following represents a plausible change in the interest rate and consumer spending?",
    "Suppose First National Bank has assets totaling $400 million, and the Federal Reserve mandates a 10% reserve requirement. The remaining funds are distributed in a 50-40 split between loans and bonds, respectively. If the central bank decided to purchase $100 million in bonds from First National Bank, which of the following best represents the effect?",
    "Suppose that for a certain year, an economy’s money supply is $648 billion. The real GDP of the economy is $3.48 trillion, giving a velocity of 4.13. Calculate the GDP deflator.",
    "Kai has a disposable income of 15 million Yen, Arsh has a disposable income of $100K, and Carson has a disposable income of 92K Euros. If the exchange rate is 145 yen per dollar and 0.9 euros per dollar, who makes the most disposable income?",
    "The current exchange rate is $1.00 for 87 yen, and the US government makes bonds with a 10% rate of return available. Japanese investors are very interested and buy tons of bonds. Which of the following represents the new possible exchange rate?",
    "If a bank borrows $2 million at 5% interest, converts the USD to Mexican pesos at an exchange rate of 20 pesos/dollar, and then lends all of it at 10% interest, they can expect to receive 44 million Mexican pesos back in a year, assuming the loans are paid back. If the exchange rate increases to 22 pesos/dollar, which of the following represents the bank’s ability to repay the initial loan?",
    "Minh is looking to invest in the foreign exchange market. He takes $10K and converts it to £8K. In the next few weeks, the exchange rate fluctuates, and the US dollar depreciates by 25 cents. Which of the following represents the return Minh makes on his investment?",
    "If the US were required to maintain a balanced federal budget each year, how would automatic stabilizers like unemployment benefits behave during a recession?",
    "From 1960 to 1980, the U.S. ran consistent deficits, yet the debt-to-GDP ratio declined. Why?",
    "If a person earns $250,000, what is their marginal tax rate and why?",
    "Why might an increase in government borrowing lead to a decrease in private investment?",
    "Which of the following scenarios challenges the theory of Ricardian equivalence?",
    "If private investment is $2 trillion, the government runs a $900 billion deficit, and the trade deficit is $400 billion, what is the level of private savings?",
    "A rising US budget deficit financed by foreign capital inflows will likely cause:",
    "The US government announces a $1 trillion infrastructure plan funded entirely through borrowing. Private savings remain stable; private investment demand increases due to increased business optimism. Meanwhile, foreign investors increase their purchases of US treasury bonds, causing the US dollar to appreciate significantly. Which of the following is most likely to occur in the short run?",
    "Which of the following is not a major federal spending category?",
    "Countries like Venezuela and Lebanon tend to have very unstable economies. If implemented, which of the following best represents the expected effect of a balanced budget?",
    "Suppose China’s economy is facing inflationary pressures. Which of the following represents how China could implement contractionary fiscal policy to decrease aggregate demand?",
    "The Colombian government deliberately passed a new tax bill intended to increase taxation. Which of the following is this an example of?",
    "When a rise in a nation’s budget deficit is financed mainly by foreign capital inflows, what outcome will most likely follow according to the national saving-investment identity?"    
];
  
  const choices4 = [
    ["A) $1.586 trillion", "B) $2.294 trillion", "C) $2.901 trillion", "D) $2.559 trillion"],
    ["A) $0.20 million", "B) $1 million", "C) $2 million", "D) $10 million"],
    ["A) $20 million", "B) $950K", "C) $1 million", "D) $10 million"],
    ["A) $3 million", "B) $9 million", "C) $10 million", "D) $2 million"],
    ["A) $197.84 trillion", "B) $35.96 trillion", "C) $4.30 trillion", "D) $22.4 trillion"],
    ["A) The interest rate will go down while consumer spending will go up", "B) The interest rate and consumer spending will go up", "C) The interest rate and consumer spending will go down", "D) The interest rate will go up while consumer spending will go down"],
    ["A) First National Bank experiences an increase of $100 million in bonds and a decrease of $100 million in reserves, which they used to replenish the bond supply",
     "B) First National Bank experiences a decrease of $200 million in loans and an increase of $200 million in bonds, which they replenished by calling in the loans",
     "C) First National Bank experiences a decrease of $100 million in bonds and an increase of $100 million in reserves, which allows them to make more loans",
     "D) First National Bank experiences an increase of $100 million in reserves and a decrease of $100 million in bonds, which allows them to hold more capital for the reserve requirement"],
    ["A) 77%", "B) 79%", "C) 81%", "D) 75%"],
    ["A) Kai", "B) Arsh", "C) Carson", "D) All make the same"],
    ["A) $1.00 for 80 yen", "B) $1.00 for 85 yen", "C) $1.00 for 100 yen", "D) There will be no change"],
    ["A) The Bank converts the 44 million Mexican pesos back to USD for a total of $2.5 million, allowing them to repay the loan and the interest and pocket the rest in profit.",
     "B) The bank converts the 44 million Mexican pesos back to USD for a total of $1.8 million, forcing them into a loss of $300K",
     "C) The bank converts the 44 million Mexican pesos back to USD for a total of $2 million, allowing them to break even with the loan plus interest",
     "D) The Bank converts the 44 million Mexican pesos back to USD for a total of $2 million, forcing them into a loss of $100K"],
    ["A) $8K", "B) $16K", "C) $12K", "D) $6K"],
    ["A) They would expand naturally, helping stabilize demand", "B) They would be reduced, potentially worsening the recession", "C) They would not affect the economy’s output", "D) They would increase the budget surplus, fueling inflation"],
    ["A) Inflation reduced the real value of government debt", "B) Tax rates were at historically high levels", "C) Economic growth outpaced the increase in debt", "D) The government was paying down the national debt aggressively"],
    ["A) It varies since each dollar is taxed differently according to the brackets", "B) 24%, because most of the salary is in this tax bracket", "C) 35%, because this is the tax bracket of the last dollar", "D) It varies since there is no one consistent taxing scheme in the United States"],
    ["A) It reduces corporate tax rates, disincentivizing investment", "B) It causes inflation to fall, reducing business confidence", "C) It raises interest rates, making loans more expensive for businesses", "D) It increases exports, leading firms to prioritize international sales"],
    ["A) Households reduce consumption when taxes increase", "B) Consumers save less when the government increases spending, assuming future taxes won’t rise", "C) Households increase their saving in response to budget deficits", "D) Businesses increase investment in anticipation of infrastructure spending"],
    ["A) $2.9 trillion", "B) $2.5 trillion", "C) $1.1 trillion", "D) $1.5 trillion"],
    ["A) A weaker US dollar and trade surplus", "B) A stronger US dollar and trade deficit", "C) Lower US interest rates and higher exports", "D) Higher inflation and lower government spending"],
    ["A) The trade balance will improve as exports become more competitive", "B) The trade deficit will widen due to higher imports and reduced exports", "C) Crowding out of private investment will occur due to falling interest rates", "D) The US will experience a trade surplus as foreign capital inflows decrease"],
    ["A) Social Security", "B) Interest payments", "C) Domestic investment in public services", "D) Health programs"],
    ["A) The economies of such governments will stabilize, as spending and taxation become equal and budget deficits lessen over time",
     "B) The economies of such governments are likely to remain in development, as an inflexible budget does not generally allow for heavy domestic investment",
     "C) The economies of such governments will fail to repay their existing debts, leading to further national crises and economic decline",
     "D) The economies of such governments will prosper, as an inflexible budget allows them to manage revenues predictably and account for deficits from year to year"],
    ["A) Increase government spending and taxation", "B) Increase government spending and decrease taxation", "C) Decrease government spending and taxation", "D) Decrease government spending and increase taxation"],
    ["A) Discretionary fiscal policy", "B) Contractionary fiscal policy", "C) Expansionary fiscal policy", "D) Automatic stabilizers"],
    ["A) Local interest rates will fall; currency value will depreciate", "B) Private investment will increase; a trade surplus emerges", "C) Currency appreciates; trade deficit widens", "D) Household savings will proportionally rise; net exports will remain unchanged"]
];
  
const questions = questions1.concat(questions2).concat(questions3).concat(questions4)
const choices = choices1.concat(choices2).concat(choices3).concat(choices4)
const flashcards = [];



const body = document.querySelector("body");
for (let i = 0; i < 100; i++) {
    let flashcard = document.createElement("div");
    flashcard.classList = "flashcard";
    let question = document.createElement("div");
    question.classList = "question";
    let answer = document.createElement("div");
    answer.classList = "answer";
    let answerStr = "";

    if (questions[i].length > 350) {
        question.classList = "question x-small-font";
    } else if (questions[i].length > 325) {
        question.classList = "question smaller-than-small-font";
    } else if (questions[i].length > 300) {
        question.classList = "question small-font";
    } else if (questions[i].length > 275) {
        question.classList = "question small-medium-font";
    } else if (questions[i].length > 250) {
        question.classList = "question medium-font";
    } else if (questions[i].length > 225) {
        question.classList = "question medium-large-font";
    } else if (questions[i].length > 200) {
        question.classList = "question large-font";
    } else if (questions[i].length > 175) {
        question.classList = "question x-large-font";
    } else {
        question.classList = "question xx-large-font";
    }
    

    for (let j = 0; j < choices[i].length; j++) {
        answerStr += `${choices[i][j]}<br>`;
    }  
    
    if (answerStr.length > 500) {
        answer.classList = "answer x-small-font";
    } else if (answerStr.length > 450) {
        answer.classList = "answer smaller-than-small-font";
    } else if (answerStr.length > 400) {
        answer.classList = "answer small-font";
    } else if (answerStr.length > 350) {
        answer.classList = "answer small-medium-font";
    } else if (answerStr.length > 300) {
        answer.classList = "answer medium-font";
    } else if (answerStr.length > 250) {
        answer.classList = "answer medium-large-font";
    } else if (answerStr.length > 200) {
        answer.classList = "answer large-font";
    } else if (answerStr.length > 150) {
        answer.classList = "answer x-large-font";
    } else {
        answer.classList = "answer xx-large-font";
    }
    
    
    question.textContent = questions[i];
    answer.innerHTML = answerStr;

    if (i == 8) {
        question.classList = "question small-font";
        question.style.cssText = "display: flex; flex-direction: column; gap: 12px; align-items: center;"
        const currContent = question.textContent;
        question.innerHTML = `<span>${currContent}</span> <img src="./images/9.png" style="display: block; height: 120px; width: 160px;">`;
    } else if (i == 30) {
        const currContent = question.textContent;
    } else if (i == 31) {
        question.style.cssText = "display: flex; flex-direction: column; gap: 12px;"
        const currContent = question.textContent;
        question.innerHTML = `<span>${currContent}</span> <img src="./images/32.png" style="display: block; height: 150px; width: auto;">`;
    } else if (i == 32) {
        question.style.cssText = "display: flex; flex-direction: column; gap: 12px; align-items: center;"
        const currContent = question.textContent;
        question.innerHTML = `<span>${currContent}</span> <img src="./images/33.png" style="display: block; height: 125px; width: 180px;">`;
    } else if (i == 33) {
        question.classList = "question small-medium-font";
        question.style.cssText = "display: flex; flex-direction: column; gap: 12px; align-items: center;"
        const currContent = question.textContent;
        question.innerHTML = `<span>${currContent}</span> <img src="./images/34.png" style="display: block; height: auto; width: 180px;">`;
    } else if (i == 61) {
        answer.innerHTML = `<img src="./images/62.png" style="display: block; height: auto; width: 220px;">`;
    } else if (i == 74) {
        question.classList = "question large-font";
        question.style.cssText = "display: flex; flex-direction: column; gap: 12px; align-items: center;"
        const currContent = question.textContent;
        question.innerHTML = `<span>${currContent}</span> <img src="./images/75and76.png" style="display: block; height: 125px; width: 180px;">`;
    } else if (i == 75) {
        question.classList = "question large-font";
        question.style.cssText = "display: flex; flex-direction: column; gap: 12px; align-items: center;"
        const currContent = question.textContent;
        question.innerHTML = `<span>${currContent}</span> <img src="./images/75and76.png" style="display: block; height: 125px; width: 180px;">`;
    } else if (i == 76) {
        question.classList = "question large-font";
        question.style.cssText = "display: flex; flex-direction: column; gap: 12px; align-items: center;"
        const currContent = question.textContent;
        question.innerHTML = `<img src="./images/77.png" style="display: block; height: auto; width: 180px;"> <span>${currContent}</span>`;
    } else if (i == 89) {
        question.classList = "question large-font";
        question.style.cssText = "display: flex; flex-direction: column; gap: 12px; align-items: center;"
        const currContent = question.textContent;
        question.innerHTML = `<span>${currContent}</span> <img src="./images/90.png" style="display: block; height: auto; width: 180px;">`;
    } 

    flashcard.appendChild(question);
    flashcard.appendChild(answer);
    flashcards.push(flashcard);
}

const groupElems = [];
let groupCount = 0;
for (let k = 0; k < 25; k++) {
    const flashcardGroup = document.createElement("div");
    flashcardGroup.classList = "flashcard-group";
    groupElems.push(flashcardGroup);
}

for (let u = 0; u < flashcards.length; u++) {
    groupElems[groupCount].appendChild(flashcards[u]);
    if ((u+1) % 4 == 0) {
        groupCount++;
    }
}

for (let groupElem of groupElems) {
    body.appendChild(groupElem)
}

// const bodyNodes = document.querySelectorAll("body > *")
// console.log(bodyNodes)